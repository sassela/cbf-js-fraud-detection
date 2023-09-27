import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { Client } from '@elastic/elasticsearch';
import { port } from "./config";
import { resolve } from "path";
import bodyParser from 'body-parser';

dotenv.config();

// Create the express application
const app = express();
const es_index: string = "ulb_credit_card_fraud";
app.use(bodyParser.json());

const client = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID!,
  },
  auth: {
    username: process.env.ELASTIC_AUTH_USERNAME!,
    password: process.env.ELASTIC_AUTH_PASSWORD!,
  },
});

// Enable CORS for all routes
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Handle GET requests to /api route
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

app.get("/transaction/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await client.search({
      index: es_index,
      body: {
        query: {
          match: {
            _id: id
          },
        },
      },
    });

    if (response.hits.hits.length === 0) {
      res.status(404).json({ error: "Transaction not found." });
    } else {
      res.json(response.hits.hits[0]); // Return the first matching transaction
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});


// Handle GET requests to /transactions route
app.get("/transactions", async (req: Request, res: Response) => {
  try {
    const response = await client.search({
      index: es_index,
    });

    res.json(response);
    // TODO: res.json(response.hits.hits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// e.g.
// curl -X POST http://localhost:3000/similar-transactions -H "Content-Type: application/json" -d '
// {
//   "query": {
//     "V1": "1.00734026030141"
//   }
// }'


// Express endpoint to handle the search request
app.post('/similar-transactions', async (req, res) => {
  try {
    const { query } = req.body;

    const boolQuery = {
      bool: {
        must: [],
      },
    };

    // Loop through each key-value pair in the request
    for (const [key, value] of Object.entries(query)) {
      const numVal = Number(value)
      const bound = 0.5

      const rangeQuery = {
        range: {
          [key]: {
            lte: numVal + bound,
            gte: numVal - bound
          },
        },
      };

      boolQuery.bool.must.push(rangeQuery);
    }

    const searchRequest = {
      index: es_index,
      body: {
        query: boolQuery,
      },
    };

    const response = await client.search(searchRequest);

    console.log("API response:")
    console.log(response)
    res.json(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Declare the path to frontend's static assets
console.log(process.env.NODE_ENV);
app.use(express.static(resolve("..", "client", "build")));


app.get("*", (_, response) => {
  response.sendFile(resolve("..", "client", "build", "index.html"));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port);
  console.log(`App listening on port ${port}...`);
}

export default app;

import dotenv from 'dotenv';
import path from 'path';
import express, { Request, Response } from 'express';
import { Client } from '@elastic/elasticsearch';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3001;

const app = express();
const client = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID!,
  },
  auth: {
    username: process.env.ELASTIC_AUTH_USERNAME!,
    password: process.env.ELASTIC_AUTH_PASSWORD!,
  },
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

// Handle GET requests to /search route
app.get("/search", async (req: Request, res: Response) => {
  const es_index: string = "ulb_credit_card_fraud";

  try {
    // const { body } = await client.search({
    const response = await client.search({
      index: es_index,
    });

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// All other GET requests not handled before will return our React app
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

import dotenv from 'dotenv';
import path from 'path';
import express, { Request, Response } from 'express';
import { Client } from '@elastic/elasticsearch';
import { port } from "./config";
// import express from "express";
import { resolve } from "path";



// export default app;

dotenv.config();

// const PORT: number = Number(process.env.SERVER_PORT) || 3010;

// Create the express application
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

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

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

// Handle GET requests to /transactions route
app.get("/transactions", async (req: Request, res: Response) => {
  const es_index: string = "ulb_credit_card_fraud";

  try {
    const response = await client.search({
      index: es_index,
    });

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// // All other GET requests not handled before will return our React app
// // app.get('*', (req: Request, res: Response) => {
// //   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// // });

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'))
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });


// Declare the path to frontend's static assets
console.log(process.env.NODE_ENV);
app.use(express.static(resolve("..", "client", "build")));


app.get("*", (_, response) => {
  response.sendFile(resolve("..", "client", "build", "index.html"));
});

app.listen(port);
console.log(`App listening on port ${port}...`);

export default app;

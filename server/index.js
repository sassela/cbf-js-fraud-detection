require('dotenv').config();
const path = require('path');
const express = require("express");
const { Client } = require('@elastic/elasticsearch')

const PORT = process.env.PORT || 3001;

const app = express();
const client = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID
  },
  auth: {
    username: process.env.ELASTIC_AUTH_USERNAME,
    password: process.env.ELASTIC_AUTH_PASSWORD
  }
})

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Handle GET requests to /search route
app.get("/search", async (req, res) => {
  const es_index = "ulb_credit_card_fraud";

  try {
    body = await client.search({
      index: es_index,
    });

    res.json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

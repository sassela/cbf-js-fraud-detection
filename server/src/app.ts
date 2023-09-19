import express from "express";
import { resolve } from "path";

// Create the express application
const app = express();

// Declare the path to frontend's static assets
console.log(process.env.NODE_ENV);
app.use(express.static(resolve("..", "client", "build")));

app.get("*", (_, response) => {
  response.sendFile(resolve("..", "client", "build", "index.html"));
});

export default app;

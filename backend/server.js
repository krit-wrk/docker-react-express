"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// Connection URL
const url = "mongodb://mongo:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "myProject";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  const app = express();
  app.use(bodyParser.json());

  app.get("/api/hello", (req, res) => {
    res.send("Hello World From Server");
  });
  app.get("/api/todos", async (req, res) => {
    const data = await collection.find().toArray();
    res.send(data);
  });
  app.post("/api/todos", async (req, res) => {
    const insertResult = await collection.insertOne(req.body);
    res.send(insertResult.insertedId.toHexString());
  });

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
}
main();

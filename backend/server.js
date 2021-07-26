"use strict";

const express = require("express");
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
  app.get("/api/hello", (req, res) => {
    res.send("Hello World From Server");
  });
  app.get("/api/documents", async (req, res) => {
    const data = await collection.find();
    res.send(data);
  });
  app.post("/api/documents", async (req, res) => {
    console.log("/api/documents");
    const insertResult = await collection.insertMany([
      { a: 1 },
      { a: 2 },
      { a: 3 },
    ]);
    console.log("Inserted documents =>", insertResult);
    res.send("Inserted documents");
  });

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
}
throw Error("asd");
main();

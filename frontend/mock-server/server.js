"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/api/hello", (req, res) => {
  res.send("Hello World From Server");
});
app.get("/api/todos", (req, res) => {
  res.send([
    { _id: 1, text: "todo01" },
    { _id: 2, text: "todo02" },
  ]);
});
app.post("/api/todos", (req, res) => {
  res.send({ _id: 3, text: "todo03" });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

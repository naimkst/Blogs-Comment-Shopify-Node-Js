const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Working...");
});

server.listen(3000, () => {
  console.log("Server runing at 300 port");
});

const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Working...");
});

mongoose
  .connect("mongodb+srv://admin:Pass.321@blogcomments.qbjvpgx.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    // Your code here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

server.listen(3000, () => {
  console.log("Server runing at 300 port");
});

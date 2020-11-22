const express = require("express");
const restful = require("node-restful");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// db
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://data/db/mydb", { useNewUrlParser: true });

// Midleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

// teste
server.get("/", (req, res, next) => res.send("Backend working..."));

// start server
server.listen(3000);

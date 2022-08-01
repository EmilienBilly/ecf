require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("hello world");
    res.send("hello");
});

app.listen(process.env.PORT, () => {});

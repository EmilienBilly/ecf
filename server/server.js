require("dotenv").config();
const partnersRouter = require("./routes/partners");
const express = require("express");

const app = express();

// middleware
app.use(express.json());

app.use("/partners", partnersRouter);

app.listen(process.env.PORT, () => {});

require("dotenv").config();
const partnersRouter = require("./routes/partners");
const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/partners", partnersRouter);

app.listen(process.env.PORT, () => {});

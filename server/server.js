require("dotenv").config();
const partnersRouter = require("./routes/partners");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3333;

// middleware
app.use(cors());
app.use(express.json());

app.use("/partners", partnersRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

require("dotenv").config();
const partnersRouter = require("./routes/partners");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors({ origin: process.env.REMOTE_CLIENT_APP, credentials: true }));
app.use(express.json());

app.use("/partners", partnersRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

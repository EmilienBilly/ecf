require("dotenv").config();
const partnersRouter = require("./routes/partners");
const structuresRouter = require("./routes/structures");
const offersRouter = require("./routes/offers");
const partnersOffersRouter = require("./routes/partners_offers");
const structuresOffersRouter = require("./routes/structures_offers");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/partners", partnersRouter);
app.use("/structures", structuresRouter);
app.use("/offers", offersRouter);
app.use("/partners_offers", partnersOffersRouter);
app.use("/structures_offers", structuresOffersRouter);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

const express = require("express");
const database = require("../db");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.get("/", authorization, async (req, res) => {
    try {
        //req.user has the payload which contains the user id
        //res.json(req.user);

        const user = await database.query("SELECT * FROM users WHERE id = $1;", [req.user]);

        if (user.rows[0].right_id !== 1) {
            return res.status(401).send("User is not admin");
        } else {
            res.json(user.rows[0]);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
});

module.exports = router;

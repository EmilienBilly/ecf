const express = require("express");
const database = require("../db");
const jwtGenerator = require("../jwtGenerator");
const router = express.Router();
const bcrypt = require("bcrypt");
const authorization = require("../middleware/authorization");

router.post("/", async (req, res) => {
    try {
        //Check if the user email exists
        const user = await database.query("SELECT * FROM users WHERE user_email = $1", [req.body.user_email]);
        if (user.rows.length === 0) {
            return res.status(401).send("Email incorrect");
        }

        //Check if the password is correct
        const correctPassword = await bcrypt.compare(req.body.user_password, user.rows[0].user_password);

        if (!correctPassword) {
            return res.status(401).send("Mot de passe incorrect");
        }

        //
        const token = jwtGenerator(user.rows[0].id, user.rows[0].right_id);
        res.json({ token, user: user.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

router.get("/verify", authorization, async (req, res) => {
    try {
        res.json({
            isTrue: true,
            user_role: req.user.user_right_id,
            user_id: req.user.user_id,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Servor Error");
    }
    console.log(req.user);
});

module.exports = router;

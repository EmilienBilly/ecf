const express = require("express");
const database = require("../db");
const jwtGenerator = require("../jwtGenerator");
const router = express.Router();
const bcrypt = require("bcrypt");

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
        const token = jwtGenerator(user.rows[0].id);
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;

const express = require("express");
const database = require("../db");

const router = express.Router();

// GET one partner's details and its structures
router.get("/:id", async (req, res) => {
    try {
        const response = await database.query("SELECT * FROM users WHERE id = $1;", [req.params.id]);

        if (response.rows.length === 0) {
            return res.status(401).send("Cet utilisateur n'existe pas");
        }
        res.json({
            user: response.rows[0],
        });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;

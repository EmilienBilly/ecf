const express = require("express");
const database = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const results = await database.query("SELECT * FROM partners;");
        res.json({
            data: {
                partners: results.rows,
            },
        });
        console.log(results);
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const results = await database.query(
            "SELECT structures.*, partners.partner_name FROM structures JOIN partners ON structures.partner_id = partners.id AND partners.id = $1;",
            [req.params.id]
        );
        res.json({
            data: {
                partner: results.rows[0].partner_name,
                structures: results.rows,
            },
        });
        console.log(results);
    } catch (error) {
        console.log(error);
    }
});

router.get("/", async (req, res) => {});

module.exports = router;

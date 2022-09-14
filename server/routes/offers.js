const express = require("express");
const database = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const results = await database.query("INSERT INTO offers (offer_name, offer_description) VALUES ($1, $2) returning *;", [req.body.offerName, req.body.offerDescription]);
        res.status(201).json({
            offer: results.rows[0],
        });
    } catch (error) {
        console.log(error);
    }
});

// Get all offers
router.get("/", async (req, res) => {
    try {
        const results = await database.query("SELECT * FROM offers;");
        res.json({
            offers: results.rows,
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

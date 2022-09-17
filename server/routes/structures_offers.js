const express = require("express");
const database = require("../db");

const router = express.Router();

router.post("/:structureId", async (req, res) => {
    try {
        const results = await database.query("INSERT INTO structures_offers (struct_id, partner_offer_id,offer_id, offer_active) VALUES ($1, $2, $3, $4) returning *;", [req.params.structureId, req.body.partner_offer_id, req.body.offer_id, req.body.offer_active]);
        res.status(201).json({
            offer: results.rows[0],
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/:structureId", async (req, res) => {
    try {
        const results = await database.query("SELECT structures_offers.*, offers.offer_name FROM structures_offers INNER JOIN offers ON structures_offers.offer_id = offers.id WHERE struct_id = $1;", [req.params.structureId]);
        res.status(201).json({
            offers: results.rows,
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

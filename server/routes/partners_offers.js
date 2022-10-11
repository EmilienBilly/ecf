const express = require("express");
const database = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const results = await database.query("INSERT INTO partners_offers (partner_id, offer_id, offer_active) VALUES ($1, $2, $3) returning *;", [req.body.partner_id, req.body.offer_id, req.body.active]);
        res.status(201).json({
            offer: results.rows[0],
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/:partnerId", async (req, res) => {
    try {
        const results = await database.query("SELECT partners_offers.*, offers.offer_name FROM partners_offers INNER JOIN offers ON partners_offers.offer_id = offers.id WHERE partner_id = $1;", [req.params.partnerId]);
        res.status(201).json({
            partnerOffers: results.rows,
        });
    } catch (error) {
        console.log(error);
    }
});

router.put("/:partnerId/:offerId", async (req, res) => {
    try {
        const results = await database.query("UPDATE partners_offers SET offer_active = $1 WHERE id = $2 returning *;", [req.body.status, req.params.offerId]);
        res.status(201).json({
            offer: results.rows[0],
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

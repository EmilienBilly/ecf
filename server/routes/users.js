const express = require("express");
const database = require("../db");

const router = express.Router();

// GET one partner's details and its structures
router.get("/partner/:id", async (req, res) => {
    try {
        const partnerResults = await database.query("SELECT partners.*, users.user_email FROM partners INNER JOIN users ON partners.user_id = users.id WHERE partners.user_id = $1;", [req.params.id]);
        const structuresResults = await database.query("SELECT structures.* FROM structures JOIN partners ON structures.partner_id = partners.id AND partners.user_id = $1;", [req.params.id]);
        res.json({
            user: {
                infos: partnerResults.rows[0],
                structures: structuresResults.rows,
            },
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/structure/:id", async (req, res) => {
    try {
        const results = await database.query("SELECT structures.*, users.user_email, partners.partner_name, partners.partner_active FROM structures INNER JOIN users ON structures.user_id = users.id INNER JOIN partners ON structures.partner_id = partners.id WHERE structures.user_id = $1;", [
            req.params.id,
        ]);
        res.json({
            user: {
                infos: results.rows[0],
            },
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/:partnerId/offers", async (req, res) => {
    try {
        const results = await database.query("SELECT partners_offers.*, offers.offer_name FROM partners_offers INNER JOIN offers ON partners_offers.offer_id = offers.id WHERE partner_id = $1;", [req.params.partnerId]);
        res.status(200).json({
            offers: results.rows,
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

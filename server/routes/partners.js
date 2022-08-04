const express = require("express");
const database = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const results = await database.query(
            "INSERT INTO partners (partner_name, partner_logo_url, partner_email, partner_password, partner_active) values ($1, $2, $3, $4, $5) returning *",
            [req.body.name, req.body.logo, req.body.email, req.body.password, req.body.active]
        );
        res.status(201).json({
            status: "success",
            data: {
                partner: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

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

router.get("/active", async (req, res) => {
    try {
        const results = await database.query("SELECT * FROM partners WHERE partner_active = TRUE;");
        res.json({
            data: {
                partners: results.rows,
            },
        });
        console.log(results);
    } catch (err) {
        console.error(err);
    }
});

router.get("/inactive", async (req, res) => {
    try {
        const results = await database.query("SELECT * FROM partners WHERE partner_active = FALSE;");
        res.json({
            data: {
                partners: results.rows,
            },
        });
        console.log(results);
    } catch (err) {
        console.error(err);
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

module.exports = router;

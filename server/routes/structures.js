const express = require("express");
const database = require("../db");

const router = express.Router();

// GET one structure's details
router.get("/:structureId", async (req, res) => {
    try {
        const results = await database.query("SELECT * FROM structures WHERE id = $1", [req.params.structureId]);
        res.json({
            structure: results.rows[0],
        });
    } catch (error) {
        console.log(error);
    }
});

// Create one structure for a partner
router.post("/", async (req, res) => {
    try {
        const userResults = await database.query("INSERT INTO users (user_email, user_password, right_id) values ($1, $2, $3) returning *", [req.body.email, req.body.password, req.body.right_id]);
        const results = await database.query("INSERT INTO structures (struct_name, struct_address, struct_active, partner_id, user_id) values ($1, $2, $3, $4, $5) returning *", [req.body.name, req.body.address, req.body.active, req.body.partner_id, userResults.rows[0].id]);
        res.status(201).json({
            status: "success",
            data: {
                user: userResults.rows[0],
                partner: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;

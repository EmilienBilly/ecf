const express = require("express");
const database = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../jwtGenerator");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        //check if user already exists
        const user = await database.query("SELECT * FROM users WHERE user_email = $1", [req.body.email]);

        // using bcrypt to hash the password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(req.body.password, salt);

        // Adding a new user
        const newUser = await database.query("INSERT INTO users (user_email, user_password, right_id) values ($1, $2, $3) RETURNING *", [req.body.email, bcryptPassword, req.body.right_id]);
        const newPartner = await database.query("INSERT INTO partners (partner_name, partner_active, user_id) values ($1, $2, $3) returning *", [req.body.name, req.body.active, newUser.rows[0].id]);

        const token = jwtGenerator(newUser.rows[0].id);

        res.status(201).json({
            status: "success",
            data: {
                user: newUser.rows[0],
                partner: newPartner.rows[0],
                token,
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// GET all the partners
router.get("/", async (req, res) => {
    try {
        const results = await database.query("SELECT partners.*, users.user_email FROM partners INNER JOIN users ON partners.user_id = users.id;");
        res.json({
            partners: results.rows,
        });
    } catch (error) {
        console.log(error);
    }
});



router.get("/rights", async (req, res) => {
    try {
        const results = await database.query("SELECT * FROM rights WHERE right_name != 'admin'");
        res.json({
            rights: results.rows,
        });
    } catch (error) {
        console.log(error);
    }
});

// GET all the partners that are active
router.get("/active", async (req, res) => {
    try {
        const results = await database.query("SELECT * FROM partners WHERE partner_active = TRUE;");
        res.json({
            partners: results.rows,
        });
    } catch (err) {
        console.error(err);
    }
});

// GET all the partners that are inactive
router.get("/inactive", async (req, res) => {
    try {
        const results = await database.query("SELECT * FROM partners WHERE partner_active = FALSE;");
        res.json({
            partners: results.rows,
        });
    } catch (err) {
        console.error(err);
    }
});

// GET one partner's details and its structures
router.get("/:partnerId", async (req, res) => {
    try {
        const partnerResults = await database.query("SELECT partners.*, users.user_email FROM partners INNER JOIN users ON partners.user_id = users.id WHERE partners.id = $1;", [req.params.partnerId]);
        const structuresResults = await database.query("SELECT structures.* FROM structures JOIN partners ON structures.partner_id = partners.id AND partners.id = $1;", [req.params.partnerId]);
        res.json({
            partner: partnerResults.rows[0],
            structures: structuresResults.rows,
        });
    } catch (error) {
        console.log(error);
    }
});

router.put("/:partnerId", async (req, res) => {
    try {
        const partnerResults = await database.query("UPDATE partners SET partner_name = $1, partner_active = $2 WHERE id = $3 returning *;", [req.body.name, req.body.active, req.params.partnerId]);
        const userResults = await database.query("UPDATE users SET user_email = $1 WHERE id = $2 returning *;", [req.body.email, partnerResults.rows[0].user_id]);
        res.status(200).json({
            status: "success",
            partner: partnerResults.rows[0],
            user: userResults.rows[0],
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;

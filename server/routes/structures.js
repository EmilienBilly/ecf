const express = require("express");
const database = require("../db");
const bcrypt = require("bcrypt");

const router = express.Router();

// GET one structure's details
router.get("/:structureId", async (req, res) => {
    try {
        const results = await database.query("SELECT structures.*, users.user_email FROM structures INNER JOIN users ON structures.user_id = users.id WHERE structures.id = $1;", [req.params.structureId]);
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
        //check if user already exists
        const user = await database.query("SELECT * FROM users WHERE user_email = $1", [req.body.email]);

        if (user.rows.length !== 0) {
            return res.status(401).send("Cet utilisateur existe déjà");
        }

        // using bcrypt to hash the password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(req.body.password, salt);

        // Adding a new user
        const newUser = await database.query("INSERT INTO users (user_email, user_password, right_id) values ($1, $2, $3) returning *", [req.body.email, bcryptPassword, req.body.right_id]);
        const newStructure = await database.query("INSERT INTO structures (struct_name, struct_address, struct_active, partner_id, user_id) values ($1, $2, $3, $4, $5) returning *", [req.body.name, req.body.address, req.body.active, req.body.partner_id, newUser.rows[0].id]);

        res.status(201).json({
            status: "success",
            data: {
                user: newUser.rows[0],
                structure: newStructure.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;

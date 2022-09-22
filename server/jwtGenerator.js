const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(id, right_id) {
    const payload = {
        user: {
            user_id: id,
            user_right_id: right_id,
        },
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1hr" });
}

module.exports = jwtGenerator;

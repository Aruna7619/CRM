const db = require("../config/db");

const generateLeadNo = () => {

    return new Promise((resolve, reject) => {

        const sql = "SELECT id FROM leads ORDER BY id DESC LIMIT 1";

        db.query(sql, (err, result) => {

            if (err) return reject(err);

            let nextId = 1;

            if (result.length > 0) {
                nextId = result[0].id + 1;
            }

            const leadNo = `LD${String(nextId).padStart(6, "0")}`;

            resolve(leadNo);

        });

    });

};

module.exports = generateLeadNo;
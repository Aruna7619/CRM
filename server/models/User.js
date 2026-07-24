const db = require("../config/db");

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT
u.id,
u.role_id,
u.employee_code,
u.first_name,
u.last_name,
u.email,
u.phone,
u.password,
u.profile_image,
u.status,
u.created_at,
u.updated_at,
r.role_name
FROM users u
JOIN roles r
ON u.role_id = r.id
WHERE u.email = ?
        `;

        db.query(sql, [email], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};



const getAllUsers = () => {
    return new Promise((resolve, reject) => {

        const sql = `
        SELECT
            u.id,
            u.employee_code,
            u.first_name,
            u.last_name,
            u.email,
            u.phone,
            u.status,
            r.role_name
        FROM users u
        JOIN roles r
        ON u.role_id = r.id
        ORDER BY u.id DESC
        `;

        db.query(sql, (err, result) => {

            if (err) return reject(err);

            resolve(result);

        });

    });
};



module.exports = {
    findUserByEmail,
    getAllUsers
};
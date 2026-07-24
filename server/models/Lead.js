const db = require("../config/db");

// Get All Leads
const getAllLeads = () => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT
                l.id,
                l.lead_no,
                l.client_name,
                l.company_name,
                l.email,
                l.phone,
                l.loan_type,
                l.loan_amount,
                l.lead_source,
                l.status,
                l.remarks,
                u.first_name AS assigned_to,
                l.created_at
            FROM leads l
            LEFT JOIN users u
                ON l.assigned_to = u.id
            ORDER BY l.id DESC
        `;

        db.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });

    });
};

const createLead = (lead) => {

    return new Promise((resolve, reject) => {

        const sql = `
            INSERT INTO leads
            (
                lead_no,
                client_name,
                company_name,
                email,
                phone,
                loan_type,
                loan_amount,
                lead_source,
                assigned_to,
                status,
                remarks,
                created_by
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                lead.lead_no,
                lead.client_name,
                lead.company_name,
                lead.email,
                lead.phone,
                lead.loan_type,
                lead.loan_amount,
                lead.lead_source,
                lead.assigned_to,
                lead.status,
                lead.remarks,
                lead.created_by
            ],
            (err, result) => {

                if (err) return reject(err);

                resolve(result);

            }
        );

    });

};
const getLeadById = (id) => {

    return new Promise((resolve, reject) => {

        const sql = `
            SELECT
                l.*,
                u.first_name AS assigned_employee
            FROM leads l
            LEFT JOIN users u
            ON l.assigned_to = u.id
            WHERE l.id = ?
        `;

        db.query(sql, [id], (err, result) => {

            if (err) return reject(err);

            resolve(result);

        });

    });

};
module.exports = {
    getAllLeads,
    createLead,
    getLeadById
};
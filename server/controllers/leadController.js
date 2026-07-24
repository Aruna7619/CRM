const leadService = require("../services/leadService");

const getAllLeads = async (req, res) => {

    try {

        const leads = await leadService.getAllLeads();

        res.status(200).json({
            success: true,
            data: leads
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const createLead = async (req, res) => {

    try {

        const result = await leadService.createLead(req.body);

        res.status(201).json({
            success: true,
            message: "Lead Created Successfully",
            data: {
    leadId: result.insertId
}
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const getLeadById = async (req, res) => {

    try {

        const lead = await leadService.getLeadById(req.params.id);

        if (lead.length === 0) {

            return res.status(404).json({
                success: false,
                message: "Lead Not Found"
            });

        }

        res.status(200).json({

            success: true,
            data: lead[0]

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

module.exports = {

    getAllLeads,
    createLead,
    getLeadById

};
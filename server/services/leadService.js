const Lead = require("../models/Lead");
const generateLeadNo = require("../utils/generateLeadNo");

const getAllLeads = async () => {

    return await Lead.getAllLeads();

};

const createLead = async (data) => {

    const leadNo = await generateLeadNo();

    data.lead_no = leadNo;

    return await Lead.createLead(data);

};

const getLeadById = async (id) => {

    return await Lead.getLeadById(id);

};

module.exports = {
    getAllLeads,
    createLead,
    getLeadById
};
const User = require("../models/User");

const getAllUsers = async () => {

    return await User.getAllUsers();

};

module.exports = {
    getAllUsers
};
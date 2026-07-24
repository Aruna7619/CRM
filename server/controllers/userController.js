const userService = require("../services/userService");

const getAllUsers = async (req, res) => {

    try {

        const users = await userService.getAllUsers();

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getAllUsers
};
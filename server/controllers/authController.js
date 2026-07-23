const authService = require("../services/authService");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token: result.token,
            data: result.user
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }
};

module.exports = {
    login
};
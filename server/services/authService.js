const User = require("../models/User");
const comparePassword = require("../utils/comparePassword");
const generateToken = require("../utils/generateToken");

const login = async (email, password) => {

    const users = await User.findUserByEmail(email);

    if (users.length === 0) {
        throw new Error("Invalid Email");
    }

    const user = users[0];

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid Password");
    }

    delete user.password;

    const token = generateToken(user);

    return {
        user,
        token
    };

    return user;
};



module.exports = {
    login
};
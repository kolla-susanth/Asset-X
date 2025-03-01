const User = require("../models/user");
const Account = require("../models/account");

const createUser = async (req, res) => {
    try {
        const { user_id, name, email,phone_number } = req.body;
        const account_id = `ACC${Math.floor(1000 + Math.random() * 9000)}`;

        const newUser = new User({ user_id, name, email, account_id,phone_number });
        await newUser.save();

        const newAccount = new Account({ account_id, user_id,phone_number, balance: 0 });
        await newAccount.save();

        res.status(201).json({ message: "User and Account created successfully", user: newUser, account: newAccount });
    } catch (error) {
        res.status(500).json({ error: "Error creating user", details: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const user = await User.findOne({ user_id });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user", details: error.message });
    }
};

// Ensure both functions are exported correctly
module.exports = { createUser, getUser };

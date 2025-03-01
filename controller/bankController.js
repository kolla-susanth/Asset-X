const Account = require("../models/account");

const deposit = async (req, res) => {
    try {
        const { account_id, amount } = req.body;

        // Check if account exists
        const account = await Account.findOne({ account_id });
        if (!account) {
            return res.status(404).json({ error: "Account not found" });
        }

        // Update balance
        account.balance += amount;
        await account.save();

        res.status(200).json({ message: "Deposit successful", balance: account.balance });
    } catch (error) {
        res.status(500).json({ error: "Error in deposit", details: error.message });
    }
};

const withdraw = async (req, res) => {
    try {
        const { account_id, amount } = req.body;

        // Check if account exists
        const account = await Account.findOne({ account_id });
        if (!account) {
            return res.status(404).json({ error: "Account not found" });
        }

        if (account.balance < amount) {
            return res.status(400).json({ error: "Insufficient funds" });
        }

        // Deduct amount
        account.balance -= amount;
        await account.save();

        res.status(200).json({ message: "Withdrawal successful", balance: account.balance });
    } catch (error) {
        res.status(500).json({ error: "Error in withdrawal", details: error.message });
    }
};

const getBalance = async (req, res) => {
    try {
        const { account_id } = req.params;

        // Find the account
        const account = await Account.findOne({ account_id });
        if (!account) {
            return res.status(404).json({ error: "Account not found" });
        }

        res.status(200).json({ balance: account.balance });
    } catch (error) {
        res.status(500).json({ error: "Error fetching balance", details: error.message });
    }
};


module.exports = { deposit, withdraw, getBalance };  //  Export all functions

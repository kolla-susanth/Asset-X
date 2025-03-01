const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    account_id: { type: String, required: true },
    type: { type: String, enum: ["deposit", "withdraw"], required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", TransactionSchema);

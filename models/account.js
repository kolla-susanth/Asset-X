const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    account_id: { type: String, required: true, unique: true },
    user_id: { type: String, required: true },
    phone_number:{ type:Number,required:true},
    balance: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Account", AccountSchema);

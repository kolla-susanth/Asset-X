const express = require("express");
const { deposit, withdraw, getBalance } = require("../controller/bankController"); //  Ensure correct import

const router = express.Router();

router.post("/deposit", deposit);
router.post("/withdraw", withdraw);
router.get("/balance/:account_id", getBalance);

module.exports = router;

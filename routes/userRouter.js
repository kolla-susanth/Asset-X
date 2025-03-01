const express = require("express");
const { createUser, getUser } = require("../controller/userController");  // Check if these functions exist

const router = express.Router();

router.post("/create", createUser);
router.get("/:user_id", getUser);  // The error suggests getUser is undefined

module.exports = router;

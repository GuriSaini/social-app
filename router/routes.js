const express = require("express");
const { createUser, loginUser, changeUserPassword } = require("../controller/userController");
const { requiredToken } = require("../utlis/authentication");
const router = express.Router();

  
router.post("/user",createUser)
router.post("/login",loginUser)
router.post("/change-password",requiredToken,changeUserPassword)




module.exports = router
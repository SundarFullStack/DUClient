const express = require("express");
const router = express.Router();
const userdb = require("../Model/user")
const AuthenticateUser = require('../middleware/AuthenticateUser');
const jwt = require("jsonwebtoken");
const userDB = require("../Model/user");
const dotenv = require("dotenv");
dotenv.config();

router.get("/", async (req, res) => {
  try {

    const token = req.headers.authorization;
    // console.log("token",token)
    const verifytoken = jwt.verify(token,process.env.login_secret_token);
    // console.log("verifyToken", verifytoken);
    if (verifytoken) {
      res.status(201).json({ status: 201, message:"User Valid" });
    } else {
      res.status(401).json({
        success:false,
        message:"User Not Valid"
      })
    }

    
  
      
        
    } catch (error) {
      res.status(401).json({ status: 401, error });
  }
  
  });

module.exports = router;
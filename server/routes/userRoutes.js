const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Test Route
router.get("/test", (req, res) => {
  res.send("User Route Working");
});

// Register User
router.post("/register", async (req, res) => {
  try {

    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({
      message: "User Registered Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// Login User
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User Not Found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password"
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
console.log("USER FOUND:");
console.log(user);

res.json({
  message: "Login Successful",
  token,
  role: user.role
});

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;
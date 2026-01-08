const usersModel = require('../models/usersModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* ================= REGISTER ================= */
exports.regiteruser = async (req, res) => {
  try {
    const { name, email, mobile_no, location, username, password } = req.body;

    if (!name || !email || !mobile_no || !location || !username || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await usersModel.create({
      name,
      email,
      mobile_no,  
      location,
      username,
      password: hashedPassword
    });  

    res.status(201).json({
      success: true,
      message: 'User registered successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Enter user details'
    });
  }
};

/* ================= LOGIN ================= */


exports.loginuser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password required'
      });
    }

    const user = await usersModel.findOne({ username });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
    }





    // generate JWT
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.json({
      success: true,
      message: 'Login successfully',
      token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Login error'
    });
  }
};

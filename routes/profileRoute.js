const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/auth');
const { getProfile } = require('../controllers/profileController');

// protected route
router.get('/profile', isAuth, getProfile);

module.exports = router;

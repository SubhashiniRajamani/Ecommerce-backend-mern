const express = require('express');
const { regiteruser, loginuser } = require('../controllers/usersController');
const usersrouter = express.Router();
const {isAuth } =require('../middlewares/auth');

usersrouter.post('/users',isAuth, regiteruser);
usersrouter.post('/login',loginuser);

module.exports = usersrouter;    
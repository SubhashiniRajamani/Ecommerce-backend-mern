const express = require ('express');
const { createtorder } = require('../controllers/orderController');
const router = express.Router();

router.route ('/order').post(createtorder);

module.exports = router;
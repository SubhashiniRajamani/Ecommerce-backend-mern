const express = require('express');

const { getproducts, getsingleproduct } = require('../controllers/productController');
const productrouter = express.Router();


productrouter.route('/product').get(getproducts);
productrouter.route('/product/:id').get(getsingleproduct);




 
module.exports = productrouter;

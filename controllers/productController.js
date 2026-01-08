

const productModel = require('../models/productModel');

// get products api // api/v1/product

exports.getproducts = async (req, res , next) => {

    // ternory oprator//
    
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i'
        }
      }
    : {}; 



    const products = await productModel.find(query);

    res.json ( {
        success : true,
        products
    });
};

// get single products api // api/v1/product/id

exports.getsingleproduct = async (req, res, next) => {

    try{

const product = await productModel.findById(req.params.id)

    res.json({
        success:true,
        product
       
    });
    }
 catch (error){
     
    res.status(404).json({
    success: false,
    message: 'not products no available'
    })
   
 }


};


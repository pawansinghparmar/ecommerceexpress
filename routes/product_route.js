var express = require('express');
var router = express.Router();
var Product = require('../controller/product_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send("product router")
});
router.post('/createproduct',Product.createProduct)
router.get('/getAllProducts',Product.getAllProducts)

module.exports = router;

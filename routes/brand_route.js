var express = require('express');
var router = express.Router();
var brand = require('../controller/brand_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('brand router')
});
router.post('/createBrand',brand.createBrand);

router.get('/findAllBrands',brand.findAllBrands);

module.exports = router;
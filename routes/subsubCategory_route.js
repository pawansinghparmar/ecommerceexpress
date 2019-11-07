var express = require('express');
var router = express.Router();
var Category=require('../controller/subsubcategory_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Category route');
});

router.get('/getAlsubsubCategories',Category.getAlsubsubCategories);

router.post('/createsubsubCategories',Category.createsubsubCategories);

router.post('/deletesubsubcategorybyid',Category.deletesubsubcategorybyid);

 router.get('/getallcatforsubcatbyid',Category.getrelatedSubcatandcategorydata);

module.exports = router;

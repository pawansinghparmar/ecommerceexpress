var express = require('express');
var router = express.Router();
var Category=require('../controller/subcategory_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Category route');
});

router.get('/getAllSubCategories',Category.getAllSubCategories);

router.post('/createSubCategory',Category.createSubCategory);

router.post('/deleteSubCategorybyid',Category.deleteSubCategorybyid);

router.post('/getallcatforsubcatbyid',Category.getallcatforsubcatbyid);

module.exports = router;

var express = require('express');
var router = express.Router();
var SUbCategory=require('../controller/subcategory_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a subCategory route');
});

router.get('/getAllSubCategories',SUbCategory.getAllSubCategories);

router.post('/createSubCategory',SUbCategory.createSubCategory);

router.post('/deleteSubCategorybyid',SUbCategory.deleteSubCategorybyid);

router.post('/getallcatforsubcatbyid',SUbCategory.getallcatforsubcatbyid);


module.exports = router;

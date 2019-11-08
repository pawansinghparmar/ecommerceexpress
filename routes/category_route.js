var express = require('express');
var router = express.Router();
var Category=require('../controller/category_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Category route');
});

router.get('/getAllCategories',Category.getAllCategories);

router.post('/createCategory',Category.createCategory);

router.post('/deleteCategorybyid',Category.deleteCategorybyid);

router.post('/getrelatedAllSubcategories',Category.getrelatedAllSubcategories);


router.post('/editCategory',Category.editCategory);

router.get('/getcategoryrelatedalldata',Category.getcategoryrelatedalldata);


module.exports = router;

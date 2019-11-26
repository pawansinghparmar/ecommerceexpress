var express = require('express');
var router = express.Router();
var SubSubCategory=require('../controller/subsubcategory_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Category route');
});

router.get('/getAlsubsubCategories',SubSubCategory.getAlsubsubCategories);

router.post('/createsubsubCategories',SubSubCategory.createsubsubCategories);

router.post('/getsubsubcategorybyid',SubSubCategory.getsubsubcategorybyid);

router.post('/deletesubsubcategorybyid',SubSubCategory.deletesubsubcategorybyid);

router.get('/getallcatforsubcatbyid',SubSubCategory.getrelatedSubcatandcategorydata);

router.put('/editsubsubcategory',SubSubCategory.editsubsubcategory);
module.exports = router;

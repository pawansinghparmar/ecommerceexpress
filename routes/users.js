var express = require('express');
var router = express.Router();
var UserCon=require('../controller/user_controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',UserCon.Register);
router.get('/getallusers',UserCon.getAllUsers);
//router.post('/getuser',UserCon.getUser);
router.get('/usercount',UserCon.getUserCount);
router.post('/userlogin',UserCon.UserLogin);
router.post('/finduser',UserCon.findUser);


module.exports = router;

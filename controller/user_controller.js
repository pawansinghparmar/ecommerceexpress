var User=require('../model/user_model');
var brypt=require('bcrypt')
var mongoose=require('mongoose')

exports.getAllUsers=function(req,res,next){
    User.find((err,result)=>{
        if(err){res.send(err)}else{res.send(result)}
    })
}

exports.Register=function(req,res,next){
    var data=req.body;
   
    brypt.hash(data.password,8,function(err,cc){
      var  password=cc;
      var obj=new User({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        userid:data.userid,
        email:data.email,
        password:password
    })
   obj.save(function(errr,result){
       if(result){
           res.send(result)
       }else{
        res.send(errr)
       }
   })
    })
}
exports.getUserCount=function(req,res,next){
    User.count(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send({id:result})
        }
    })
}
exports.UserLogin = function(req,res,next){

    console.log(userdata)
     brypt.hash(userdata.password,8,function(err,usercb){
         if(err){res.send(err)}
         else{
         var loginpassword = usercb;
     
        var userobj = new User({
            email:userdata.email,
            password:loginpassword
        
        })
        res.send(userobj)
    }
        
     })


}

exports.findUser=function(req,res,next){
    var requesteddata= req.body
    User.find({email:requesteddata.email}).exec(function(err,result){
        // if(err){res.send(err)}
        // else{res.send(result)}
            brypt.compare(requesteddata.password,result[0].password,function(err,result){
                if(!err){console.log(result)}
            })
    })

}
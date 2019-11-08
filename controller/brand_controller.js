var brand = require('../model/brand_model')
var mongoos =require('mongoose')

exports.createBrand=function(req,res,next){
    var data = req.body;
    var obj = new brand({
        _id: new mongoos.Types.ObjectId,
        name: data.name,
        creationDate:Date.now(),
        categoryid:data.categoryid,
        subcategoryid:data.subcategoryid,
        subsubcategoryid:data.subsubcategoryid,
    })

    obj.save(function(err,result){
        
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })    
}
exports.findAllBrands=function(req,res,next){
    brand.find(function(err,result){
        
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })
}


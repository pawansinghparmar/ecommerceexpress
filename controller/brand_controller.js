var brand = require('../model/brand_model')
var mongoos =require('mongoose');
var subsubcategory=require('../model/subsubcategory_model')

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

exports.allBrandRelatedData = function(req,res,next){
    brand.find().populate("getsbrandCategory").populate("getbrandsubCategory").populate("getbrandsubsubCategory").exec(function(err,result){
        if(err){
            res.send(err)
        }else{res.send(result)}
    })
}

exports.getbranddatabyid=function(req,res,next){
    console.log(req.body)
    subsubcategory.findById(req.body.id).populate('getsubsubCategoryBrand').exec(function(err,result){
        if(err){
            res.send(err)
        }else{res.send(result)}
    })
}
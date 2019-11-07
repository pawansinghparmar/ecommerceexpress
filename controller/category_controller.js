var Category=require('../model/category_model')
var mongoose=require('mongoose')

exports.createCategory=function(req,res,next){
    var data=req.body;
    var obj=new Category({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        description:data.description,
        creationDate:Date.now(),


    })
    obj.save(function(err,result){
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })
}
exports.getAllCategories=function(req,res,next){
    res.send('get all categorieds function');
}
exports.deleteCategorybyid=function(req,res,next){
    res.send('deleteby id function');
}

exports.getrelatedAllSubcategories=function(req,res,next){
    var data=req.body;
    Category.findById(data.id).populate('getAllrelatedSubcategories').exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
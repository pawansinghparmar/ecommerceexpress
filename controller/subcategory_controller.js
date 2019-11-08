var SUbCategory=require('../model/subCategory_model')
var mongoose=require('mongoose')

exports.createSubCategory=function(req,res,next){
    var data=req.body;
    var obj=new SUbCategory({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        description:data.description,
        creationDate:Date.now(),
        categoryid:data.categoryId


    })
    obj.save(function(err,result){
        
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })
}
exports.getAllSubCategories=function(req,res,next){
    SUbCategory.find().exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
exports.deleteSubCategorybyid=function(req,res,next){
    var data = req.body;
    console.log(data.id);
    SUbCategory.findByIdAndRemove(data.id,function(err,result){
        if(err){
            res.send(err)
        }else{res.send(result)}
    })   
}

exports.getallcatforsubcatbyid=function(req,res,next){
    var data=req.body;
    SUbCategory.findById(data.id).populate('getCategory').exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

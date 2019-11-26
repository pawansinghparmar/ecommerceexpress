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
    Category.find((err,result)=>{
        if(err){res.send(err)}else{res.send(result)}
    })
}
exports.deleteCategorybyid=function(req,res,next){
    var data=req.body;
    console.log(data.id);
    Category.findByIdAndDelete(data.id,function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
    
}

exports.getrelatedAllSubcategories=function(req,res,next){
    Category.findById(data.id).populate('getAllrelatedSubcategories').exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
exports.editCategory = function(req,res,next){
    var data=req.body;
    console.log(data)
    Category.findByIdAndUpdate(data.id,{
        name:data.name,
        description:data.description,
        creationDate:data.creationDate
    }).exec(function(err,result) {
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}


exports.getcategoryrelatedalldata=function(req,res,next){
  var data;
    Category.find().populate('getcategorySubcategory').populate('getcategorySubSubcategory').exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}


var SubSubCategory=require('../model/subsubcategory_model')
var mongoose=require('mongoose')

exports.createsubsubCategories=function(req,res,next){
    var data=req.body;
    var obj=new SubSubCategory({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        description:data.description,
        creationDate:Date.now(),
        categoryid:data.categoryid,
        subcategoryid:data.subcategoryid


    })
    obj.save(function(err,result){
        if(err){
            res.send(err.errmsg)
        }else{
            res.send(result)
        }
    })
}
exports.getAlsubsubCategories=function(req,res,next){
    SubSubCategory.find().populate('getsCategory').populate('getsubsCategory').exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
exports.deletesubsubcategorybyid=function(req,res,next){
    res.send('deleteby id function');
}

exports.getrelatedSubcatandcategorydata=function(req,res,next){
    
    SubSubCategory.find().populate('getsCategory').populate('getsubsCategory').exec(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

exports.getsubsubcategorybyid=function(req,res,next){
    var data=req.body;
    console.log(data)
  
    SubSubCategory.findById(data.id).exec(function(err,result){
        if(result){
            res.send(result)
        }else{
            res.send(err)
        }
    })
  
  }
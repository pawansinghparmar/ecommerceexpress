var mongoose = require('mongoose')
var Product = require('../model/product_model')

exports.createProduct = function(req,res,next){
var data = req.body;
console.log(data)
var obj = new Product({
    _id:new mongoose.Types.ObjectId,
    name:data.name,
    price:data.price,
    quantity:data.quantity,
    creationDate:Date.now(),
    categoryid:data.categoryid,
    subcategoryid:data.subcategoryid,
    subsubcategoryid:data.subsubcategoryid,
    description:data.description,
    brandid:data.brandid,
        image:data.image
})
obj.save(function(err,result){
    if(err){res.send(err)}
    else{res.send(result)}
})
}

exports.getAllProducts = function(req,res){
    Product.find().
    populate('getCategoryofproduct').
    populate('getSubcategoryofProduct').
    populate('getSubSubCategoryofProduct').
    populate('getBrandofProduct')
    .exec(function(err,result){
        if(err){res.send(err)}
     else{res.send(result)}
    })
}

exports.getProductdatabyId=function(req,res,next){
    console.log(req.body);
    Product.findById(req.body.id).populate('getCategoryofproduct').populate('getBrandofProduct').exec(function(err,result){
        if(err){res.send(err)}
     else{res.send(result)}
    })
}
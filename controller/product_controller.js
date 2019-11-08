var mongoose = require('mongoose')
var Product = require('../model/product_model')

exports.createProduct = function(req,res,next){
var data = req.body;
var obj = new Product({
    _id:new mongoose.Types.ObjectId,
    name:data.name,
    price:data.price,
    quantity:data.quantity,
    creationDate:Date.now(),
    categoryid:data.categoryid,
    subcategoryid:data.subcategoryid,
    subsubcategoryid:data.subsubcategoryid,
    brandid:data.brandid,
})
obj.save(function(err,result){
    if(err){res.send(err)}
    else{res.send(result)}
})
}

exports.getAllProducts = function(req,res){
    Product.find(function(err,result){
        if(err){res.send(err)}
     else{res.send(result)}
    })
}
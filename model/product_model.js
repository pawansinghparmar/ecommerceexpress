var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProductSchema = new Schema({
    _id:{type:Schema.Types.ObjectId},
    name:{type:Schema.Types.String,required:true},
    price:{type:Schema.Types.Number,required:true},
    quantity:{type:Schema.Types.Number,required:true},
    creationDate:{type:Schema.Types.Date},
    categoryid:{type:String,required:true},
    subcategoryid:{type:String,required:true},
    subsubcategoryid:{type:String,required:true},
    brandid:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

ProductSchema.virtual('getCategoryofproduct',{
    ref:'Category',
    localField:'categoryid',
    foreignField:'_id',
    justOne: false,
})
ProductSchema.virtual('getSubcategoryofProduct',{
    ref:'SubCategory',
    localField:'subcategoryid',
    foreignField:'_id',
    justOne:false,

})
ProductSchema.virtual('getSubSubCategoryofProduct',{
    ref:'SubSubCategory',
    localField:'subsubcategoryid',
    foreignField:'_id',
    justOne:false,
})
ProductSchema.virtual('getBrandofProduct',{
    ref:'Brand',
    localField:'brandid',
    foreignField:'_id',
    justOne:false
})

module.exports=mongoose.model('Product',ProductSchema)
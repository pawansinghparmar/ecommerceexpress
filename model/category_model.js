var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CategorySchema=new Schema({
    _id:{type:Schema.Types.ObjectId},
    name:{type:Schema.Types.String,required:true,unique:true},
    description:{type:Schema.Types.String},
    creationDate:{type:Schema.Types.Date},
    SubCategoryId:String
},{
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
})

CategorySchema.virtual('getcategorySubcategory',{
    ref: 'SubCategory',
    localField: '_id',
    foreignField: 'categoryid',
    justOne: false,
})

CategorySchema.virtual('getcategorySubSubcategory',{
    ref: 'SubSubCategory',
    localField: '_id',
    foreignField: 'categoryid',
    justOne: false,
})

CategorySchema.virtual('getcategoryBrand',{
    ref: 'Brand',
    localField: '_id',
    foreignField: 'categoryid',
    justOne: false,
})



module.exports=mongoose.model('Category',CategorySchema);


var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var SubSubCategorySchema = new Schema({
    _id:{type:Schema.Types.ObjectId},
    name:{type:Schema.Types.String,required:true,unique:true},
    description:{type:Schema.Types.String},
    creationDate:{type:Schema.Types.Date},
    categoryid:{type:String,required:true},
    subcategoryid:{type:String,required:true}

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

SubSubCategorySchema.virtual('getsCategory',{
    ref: 'Category',
    localField: 'categoryid',
    foreignField: '_id',
    justOne: false,
})

SubSubCategorySchema.virtual('getsubsCategory',{
    ref: 'SubCategory',
    localField: 'subcategoryid',
    foreignField: '_id',
    justOne: false,
})


SubSubCategorySchema.virtual('getsubsubCategoryBrand',{
    ref: 'Brand',
    localField: '_id',
    foreignField: 'subsubcategoryid',
    justOne: false,
})


module.exports=mongoose.model('SubSubCategory',SubSubCategorySchema)
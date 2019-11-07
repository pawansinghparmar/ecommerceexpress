var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BrandSchema = new Schema({
    _id:{type:Schema.Types.ObjectId},
    name:{type:Schema.Types.String,required:true},
    creationDate:{type:Schema.Types.Date},
    categoryid:{type:String,required:true},
    subcategoryid:{type:String,required:true},
    subsubcategoryid:{type:String,required:true}

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

BrandSchema.virtual('getsbrandCategory',{
    ref: 'Category',
    localField: 'categoryid',
    foreignField: '_id',
    justOne: false,
})

BrandSchema.virtual('getbrandsubCategory',{
    ref: 'SubCategory',
    localField: 'subcategoryid',
    foreignField: '_id',
    justOne: false,
})

BrandSchema.virtual('getbrandsubsubCategory',{
    ref: 'SubSubCategory',
    localField: 'subsubcategoryid',
    foreignField: '_id',
    justOne: false,
})



module.exports=mongoose.model('Brand',BrandSchema)
var mongoose = require("mongoose");
var Schema=mongoose.Schema;
const userschema  =new Schema({
    _id:{type:Schema.Types.ObjectId},
    name:{type:Schema.Types.String,required:true },
    userid:{type:Schema.Types.String,required:true },
    email:{type:Schema.Types.String,required:true },
    password:{type:Schema.Types.String,required:true }
})

module.exports=mongoose.model('User',userschema);



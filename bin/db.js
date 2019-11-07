var mongoose=require('mongoose');
var connectrion="mongodb://localhost:27017/ecommerce-11-7-2019";
mongoose.connect(connectrion,{ useNewUrlParser: true, useUnifiedTopology: true },function(err,res){
    if(err){
        console.log('mongodb noit connected')
    }else{
        console.log('mongo started')
    }
})
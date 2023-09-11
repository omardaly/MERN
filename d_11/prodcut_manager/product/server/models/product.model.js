const mongoose = require('mongoose');
const productSchema= new mongoose.Schema({

    Title:{
        type: String,
        require:[true,"Title Is Required❌❌❌❌"],
        minlength:[3,"Title must be greater than 3 characters"]
    },
    Price:{
        type:Number,
        required:[true,"{Path}is very required"],
        
    },
    Description:{
        type:String,


    },
   

},{timestamps:true}) 
const product = new mongoose.model("product",productSchema)
module.exports = product
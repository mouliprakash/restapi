const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
name: {
    type: String,
    required:true
},
company: {
    type:String,
    enum:{
        values:["apple","samsung","dell","mi","nokia","asus","lenovo","rolex"],
        message: `{value} is not supported`
    }
},
price: {
    type:Number,
    required:[true,"price must be provided"]
},
featured: {
    type:Boolean,
    default: false
},
rating : {
    type:Number,
    default:4.8
},
createdAt:{
    type:Date,
    default:Date.now()
},
colors:{
    type:[String],
    default:["undefined"]
},
image:{
    type:String,
    default:"U/N"
},
description:{
    type:String,
    default:"Undefined"
},
category:{
    type:String,
    default:"Undefined"
},
shipping: {
    type:Boolean,
    default: false
},



});


module.exports = mongoose.model('Product',productschema);
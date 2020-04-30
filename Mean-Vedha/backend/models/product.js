const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    prodName:{type:String},
    prodDesc:{type:String},
    prodPrice:{type:Number},
    manuDate:{type:Date,default:Date.now},
    expDate:{type:Date,default:Date.now},
    barCode:{type:Number}
})
module.exports=mongoose.model('Product',productSchema)
import mongoose from "mongoose";
const orderSchema= new mongoose.Schema({
userId:{
    type: mongoose.Schema.ObjectId,
    ref:'User'
},
orderId:{
    type: String,
    required:[true," provide orderId"],
    unique:true
},
productId:{
    type: mongoose.Schema.ObjectId,
    ref:'product'
},
productDetails:{
    name: String,
    image: Array,
},
paymentId:{
    type:String,
    default:""
},
paymentStatus:{
    type: String,
    default:""
},
deliveryAddress:{
    type : mongoose.Schema.ObjectId,
    ref:'address'
}
})
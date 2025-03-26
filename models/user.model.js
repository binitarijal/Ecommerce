import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
name:{
    type: String,
    required:[true,"provide name"]
},
email:{
    type:String,
    required:[true,"provide email"],
    unique:true
},
password:{
    type:String,
required:[true,"provide pw"],
},
avatar:{
    type:String,
    default:""
},
mobileno:{
    type:Number,
    default:null
},
refreshToken:{
type: String,
default:""
},
verifyEmail:{
    type: Boolean,
    default:false
},
lastLoginDate:{
type: Date,
default:""
},
status:{
    type: String,
    enum:["Active","Inactive","Suspended"],
    default:"Active"
},
addressDetails:[
    {
        type: mongoose.Schema.ObjectId,
        ref:'address'
    }
],
shoppingCart:[
    {
        type: mongoose.Schema.ObjectId,
        ref:'cartProduct'
    }
],
orderHistory:[
    {
        type: mongoose.Schema.ObjectId,
        ref:'order'
    }
],
forgetPasswordOtp:{
    type:String,
    default:null
},
forgetPasswordExpired:{
    type: Date,
    default:""
},
role:{
    type:String,
    enum:['Admin','USER'],
    default:"USER"
}
},{ 
    timestamps:true
})
const UserModel =mongoose.model("User",userSchema)
export default UserModel
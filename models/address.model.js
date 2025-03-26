import mongoose from "mongoose";
const addressSchema=new mongoose.Schema({
    adressLine:{
        type:String,
        default:""
    },
    city:{
        type: String,
        default:""
    },
    state:{
        type: String,
        default:""
    },
    pincode:{
        type: String,

    },
    country:{
        type: String
    },
    mobileno:{
        type:Number,
        default:null
    },
    status:{
        type: Boolean,
        default: true
    }
},{
    timestamp: true
})
const AddressModel =mongoose.model('address',addressSchema)
export default AddressModel
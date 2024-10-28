import mongoose, { Schema } from "mongoose";
const voteduserSchema =Schema({
    email:{
        type:String,
        required:true
        
    },
    comment:{
        type:String,
        required:false,
        default:null
    },
    candidate:{
        type:String,
        required:false
    }
})
export default mongoose.model('votedUser',voteduserSchema)
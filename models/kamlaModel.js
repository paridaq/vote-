import mongoose ,{Schema}from 'mongoose'

const kamlaSchma = Schema({

    votes:{
        type:Number,
        required:true,
        default:0
    }
})
export default mongoose.model('kamla',kamlaSchma)
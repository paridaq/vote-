import mongoose from 'mongoose'

const kamlaSchma = Schema({

    votes:{
        type:Number,
        required:true
    }
})
export default mongoose.model('kamla',kamlaSchma)
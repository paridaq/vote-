import mongoose, { Schema } from 'mongoose'
const trumpSchema = Schema({
    votes:{
        type:Number,
        reqired:true,
        default:0
    }
})
export default mongoose.model('trump',trumpSchema)
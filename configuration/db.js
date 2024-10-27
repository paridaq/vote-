import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn =await  mongoose.connect(process.env.MONGODB_uri)
        console.log(`connected to database ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error)
        
    }
   
}
export default connectDB
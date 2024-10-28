import usermodel from "../models/usermodel.js" 
 
 export const authChecker = async(req,res,next)=>{
   const {email} =  req.params
   try {
    const user = await usermodel.findOne({email})
    if(!user){
        return res.send({
           messaage:'register to vote' 
        })
    }
   
    
    next()
   } catch (error) {
    console.log(error)
    res.status()
    
   }
 }
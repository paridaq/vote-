import usermodel from "../models/usermodel" 
 
 export const authChecker = async(req,res)=>{
   const {email} =  req.body
   try {
    const user = await usermodel
   } catch (error) {
    
   }
 }
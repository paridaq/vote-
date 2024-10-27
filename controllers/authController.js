import usermodel from "../models/usermodel.js"

export const   registerController = async(req,res)=>{
    const { name,email,password} = req.body
    try {
    if(!email){
        return res.send({
            message:'email is required'
        })
    }
    if(!name){
        res.send({
            message:'name is required'

        })
    }
    if(!password){
        return res.send({
            message:'password is required'
        })
    }
    const existingUser = await usermodel.findOne({email})
    if(existingUser){
        return res.send({
            message:'user already exist'
        })
    }
        const user = await new usermodel({name,email,password}).save()
        res.status(200).send({
            success:true,
            message:'uRegister succesfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'unable to register user',
            error
        })
        
    }

}
export const loginController = async(req,res)=>{
    const {email,password} = req.body
    try {
        if(!email || !password){
            return res.send({
                message:'email and password is required to login'
            })
        }

        const user = await usermodel.findOne({email})
       if(!user){
        return res.send({
            message:'register before login',
            success:false
        })
       }
       if(user.password !==password){
        return res.send({
            message:'incorrect password',
            success:false
        })
       }
       return res.status(200).send({
        success:true,
        message:'login succesfull',
        user
       })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'server error',
            error
        })
        
    }
}
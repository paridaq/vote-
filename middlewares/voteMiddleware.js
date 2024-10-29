import votedModel from "../models/votedModel.js";
export const abletoComment = async(req,res,next)=>{
    const {email} = req.params
    try {
        const eligibile = await votedModel.findOne({email})
        if(email){
            return res.send({
                message:'you can vote once'
            })
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"server error midlew",
            error
        })
        
    }
}
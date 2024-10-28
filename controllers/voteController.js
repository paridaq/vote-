import trumpModel from '../models/trumpModel.js'
import kamlaModel from '../models/kamlaModel.js'
import votedModel from '../models/votedModel.js'


export const trumpvoteController = async(req,res)=>{
      const {email} = req.params
      
    try {
        const alreadyvotedUser = await votedModel.findOne({email})
        if(alreadyvotedUser){
           return res.send({
               message:'you can vote once'
           })
        }
        const trumpVote = await trumpModel.findOne()
        if(!trumpVote){
           await trumpModel.create({votes:1})
        }else{
            trumpVote.votes +=1;
            await trumpVote.save()
        }
         
         const voteUser = await votedModel.create({email})
         
        res.status(200).send({
            success:true,
            message:'your vote recorded',
            trumpVote
        })
       
      
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error while voting',
            error
        })
        
    }
}


export const kamlavoteController = async(req,res)=>{
    const {email} = req.params
    
  try {
    const alreadyvotedUser = await votedModel.findOne({email})
    if(alreadyvotedUser){
       return res.send({
           message:'you can vote once'
       })
    }
      const kamlaVote = await kamlaModel.findOne()
      if(!kamlaVote){
         await kamlaModel.create({votes:1})
      }else{
          kamlaVote.votes +=1;
          await kamlaVote.save()
      }
      const voteUser = await votedModel.create({email})
      res.status(200).send({
        success:true,
        message:'vote colllected succesfully',
        kamlaVote
      })
     
    
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:'error while voting',
          error
      })
      
  }
}
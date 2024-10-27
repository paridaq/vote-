import trumpModel from '../models/trumpModel.js'
import votedUser from '../models/votedUser.js'
import kamlaModel from '../models/kamlaModel.js'

export const trumpvoteController = async(req,res)=>{
      const { email,comment ,candidate} = req.body
    try {
        const trumpVote = await trumpModel.findOne()
        if(!trumpVote){
           await trumpModel.create({votes:1})
        }else{
            trumpVote.votes +=1;
            await trumpVote.save()
        }
        const User = await votedUser({email})
        if(votedUser){
            return res.send({
                message:"You already give votes"
            })
        }
        const newUser = await new votedUser({email,comment,candidate}).save()
        res.status(200).send({
            message:'Thank You for voting',
            success:true, 
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
    const { email,comment ,candidate} = req.body
  try {
      const kamlaVote = await kamlaModel.findOne()
      if(!kamlaVote){
         await kamlaModel.create({votes:1})
      }else{
          kamlaVote.votes +=1;
          await kamlaVoteVote.save()
      }
      const User = await votedUser({email})
      if(votedUser){
          return res.send({
              message:"You already give votes"
          })
      }
      const newUser = await new votedUser({email,comment,candidate}).save()
      res.status(200).send({
          message:'Thank You for voting',
          success:true, 
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
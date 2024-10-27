import express from 'express'
import { kamlavoteController, trumpvoteController } from '../controllers/voteController'
const  router = express.Router()

router.post('/trumpvotes',trumpvoteController)
router.post('/kamlavote',kamlavoteController)


export default router
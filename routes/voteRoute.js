import express from 'express'
import { commentController, kamlavoteController, trumpvoteController } from '../controllers/voteController.js'
import { authChecker } from '../middlewares/authMiddleware.js'
import { abletoComment } from '../middlewares/voteMiddleware.js'
const  router = express.Router()

router.post('/trumpvotes/:email',authChecker,trumpvoteController)
router.post('/kamlavotes/:email',authChecker,kamlavoteController)
router.post('/comment/:email',abletoComment,commentController)


export default router
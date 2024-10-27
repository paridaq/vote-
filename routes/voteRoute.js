import express from 'express'
import { kamlavoteController, trumpvoteController } from '../controllers/voteController.js'
import { authChecker } from '../middlewares/authMiddleware.js'
const  router = express.Router()

router.post('/trumpvotes/:email',authChecker,trumpvoteController)
router.post('/kamlavote/:email',authChecker,kamlavoteController)


export default router
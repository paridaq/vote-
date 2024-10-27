import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './configuration/db.js'
import authRoute from './routes/authRoute.js'
import voteRoute from './routes/voteRoute.js'
import cors from 'cors'

dotenv.config()

//database connection
connectDB()


const app = express();

app.use(cors())

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))


//auth
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/vote',voteRoute)

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server listen on ${PORT}`)
})
import React,{useState} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'




export default function Register() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async(e)=>{
    e.preventDefault()
try {
  const res = await axios.post ('http://localhost:8080/api/v1/auth/register',{name,email,password})
  if(res && res.data.success){
    toast.success(res.data.messsage)
    navigate(location.state ?.from || '/vote ',{state:{email,name}})
  }
} catch (error) {
  console.log(error)
  toast.error('something went wrong')
  
}

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-purple-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name='name'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-md text-sm shadow-sm placeholder-purple-400
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-md text-sm shadow-sm placeholder-purple-400
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-md text-sm shadow-sm placeholder-purple-400
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
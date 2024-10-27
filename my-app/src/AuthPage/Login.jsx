
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location =useLocation()
  const navigate= useNavigate()
  

  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/login',{email,password})
      if(res&&res.data.success){
        toast.success(res.data.messsage)
        navigate(location.state ?.from ||'/vote' ,{state:{email}})
      }
    } catch (error) {
      console.log(error)
      toast.error('error in getting user details')
      
    }
  
  
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-purple-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-md text-sm shadow-sm placeholder-purple-400
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-md text-sm shadow-sm placeholder-purple-400
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-b from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}
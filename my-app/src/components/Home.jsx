import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/vote')

  }
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-100 to-purple-200">
      <header className="bg-white bg-opacity-90 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-bold text-purple-700">
              Vote
            </a>
            <ul className="flex space-x-4">
              <li><a href="/contact" className="text-purple-700 hover:text-purple-900">Contact</a></li>
              <li><a href="/about" className="text-purple-700 hover:text-purple-900">About</a></li>
              <li><a href="/profile" className="text-purple-700 hover:text-purple-900">Profile</a></li>
              <li><a href="/Register" className="text-purple-700 hover:text-purple-900">Register</a></li>
              <li><a href="/Login" className="text-purple-700 hover:text-purple-900">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Your Voice Matters</h1>
          <p className="text-xl text-purple-700 mb-8">
            Join our community and make a difference. It's time to stand up, speak out, and vote for the change you want to see.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300" onClick={handleClick}>
            Get Started
          </button>
        </div>
      </main>

      <footer className="bg-purple-300 py-4">
        <div className="container mx-auto px-4 text-center text-purple-800">
          <p>&copy; {new Date().getFullYear()} Vote App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
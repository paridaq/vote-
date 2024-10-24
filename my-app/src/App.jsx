import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Vote from './components/ElectionPage'
import ElectionPage from './components/ElectionPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/vote' element={<ElectionPage/>}/>
    </Routes>
      
    </>
  )
}

export default App

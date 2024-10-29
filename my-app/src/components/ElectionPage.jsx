import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useLocation,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'


// CommentSection Component
const CommentSection = ({ comments = [], username, comment, setUsername, setComment, handleComment }) => {
  const location = useLocation()
  const {email} = location.state
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow">
        <input
type="text"
placeholder="Your username"
value={username}
onChange={(e) => setUsername(e.target.value)}
className="w-full p-2 mb-2 border rounded"
/>
      <textarea
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        onClick={handleComment}
        className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Post Comment
      </button>
      <div className="mt-4 max-h-40 overflow-y-auto">
        {comments.map((c, index) => (
          <div key={index} className="mb-2 p-2 bg-purple-100 rounded">
            <p className="font-bold">{c.user}</p>
            <p>{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// CandidateSection Component
const CandidateSection = ({ name, imageUrl, votes, handleVote, commentProps }) => {
  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow">
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h2 className="text-2xl font-bold text-center mt-4">{name}</h2>
      <button
        onClick={handleVote}
        className="w-full mt-4 p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Vote for {name} ({votes})
      </button>
      <CommentSection {...commentProps} />
    </div>
  )
}

// Main ElectionPage Component
const ElectionPage = () => {
  const [trumpVotes, setTrumpVotes] = useState(0)
  const [kamalaVotes, setKamalaVotes] = useState(0)
  const [trumpComments, setTrumpComments] = useState([])
  const [kamalaComments, setKamalaComments] = useState([])
  const [username, setUsername] = useState('')
  const [trumpComment, setTrumpComment] = useState('')
  const [kamalaComment, setKamalaComment] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const {email} = location.state

  const handleVote = async(candidate) => {
    if (candidate === 'trump') {
     
      const trumpVote = await axios.post(`http://localhost:8080/api/v1/vote/trumpvotes/${email}`)
      if(trumpVote.data.success){
        setTrumpVotes(trumpVotes + 1)
        toast.success(trumpVote.data.success)
       
      }


    } else {
    
      const kamlaVote = await axios.post(`http://localhost:8080/api/v1/vote/kamlavotes/${email}`)
      if(kamlaVote.data.success){
        setKamalaVotes(kamalaVotes + 1)
        toast.success(kamlaVote.data.success)
        
      }
    }
  }
  useEffect(()=>{
    const storedName = localStorage.getItem('username') 
    setUsername(storedName)
  },[])

  const handleComment = async(candidate) => {
    if (!username) {
      alert('Please enter a username before commenting.')
      return
    }
    if (candidate === 'trump' && trumpComment.trim()) {
      const res = await axios.post(`http://localhost:8080/api/vote/comment/${email}`,{comment:trumpComment,candidate,})
      if(res.data.success){
        alert(res.data.message)
      }
      setTrumpComments([...trumpComments, { user: username, comment: trumpComment }])
      
      setTrumpComment('')
    } else if (candidate === 'kamala' && kamalaComment.trim()) {
      setKamalaComments([...kamalaComments, { user: username, comment: kamalaComment }])
      setKamalaComment('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-400 p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Election Page</h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <CandidateSection
          name="Donald Trump"
          imageUrl="https://via.placeholder.com/150?text=Donald+Trump"
          votes={trumpVotes}
          handleVote={() => handleVote('trump')}
          commentProps={{
            comments: trumpComments,
            username,
            comment: trumpComment,
            setUsername,
            setComment: setTrumpComment,
            handleComment: () => handleComment('trump')
          }}
        />
        <CandidateSection
          name="Kamala Harris"
          imageUrl="https://via.placeholder.com/150?text=Kamala+Harris"
          votes={kamalaVotes}
          handleVote={() => handleVote('kamala')}
          commentProps={{
            comments: kamalaComments,
            username,
            comment: kamalaComment,
            setUsername,
            setComment: setKamalaComment,
            handleComment: () => handleComment('kamala')
          }}
        />
      </div>
    </div>
  )
}

export default ElectionPage
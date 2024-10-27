import React, { useState } from 'react';




const CommentSection = ({ candidate, comments, addComment }) => {
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      addComment({ user: userName, text: newComment, profilePic: '/placeholder.svg?height=40&width=40' });
      setNewComment('');
      setUserName('');
    }
  };

  return (
    <div className="bg-white bg-opacity-90 border-t border-purple-200 p-4 mt-4">
      <h3 className="text-xl font-semibold mb-4 text-purple-800">Comments for {candidate}</h3>
      <form onSubmit={handleCommentSubmit} className="mb-6 flex items-center">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
          className="flex-grow p-2 mr-2 border border-purple-300 rounded"
          required
        />
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-grow p-2 mr-2 border border-purple-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        >
          Post
        </button>
      </form>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start">
            <img
              src={comment.profilePic}
              alt={comment.user}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <span className="font-semibold mr-2 text-purple-800">{comment.user}</span>
              <span className="text-purple-900">{comment.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CandidateSection = ({ name, votes, onVote, comments, addComment }) => {
  const profileImage = 
    name ==='Donald Trump' ? 'image.jpg'
    :name ==='Kamla Harris'? '':'/placeholder.svg?height=300&width=300'
  
  return (
  <div className="w-1/2 p-4 border-r border-purple-200">
    <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 mb-4">
      <img
        src={profileImage}
        alt={name}
        className="w-full h-64 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-800">{name.toUpperCase()}</h2>
      <button
        onClick={onVote}
        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Vote ({votes})
      </button>
    </div>
    <CommentSection
      candidate={name}
      comments={comments}
      addComment={addComment}
    />
  </div>
);
}

const ElectionPage = () => {
  const [trumpVotes, setTrumpVotes] = useState(0);
  const [harrisVotes, setHarrisVotes] = useState(0);
  const [trumpComments, setTrumpComments] = useState([]);
  const [harrisComments, setHarrisComments] = useState([]);

  const handleVote = (candidate) => {
    if (candidate === 'trump') {
      setTrumpVotes(trumpVotes + 1);
    } else {
      setHarrisVotes(harrisVotes + 1);
    }
  };

  const addComment = (candidate) => (comment) => {
    if (candidate === 'trump') {
      setTrumpComments([comment, ...trumpComments]);
    } else {
      setHarrisComments([comment, ...harrisComments]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-purple-100 to-purple-300">
      <div className="flex-1 flex">
        <CandidateSection
          name="Donald Trump"
          votes={trumpVotes}
          onVote={() => handleVote('trump')}
          comments={trumpComments}
          addComment={addComment('trump')}
        />
        <CandidateSection
          name="Kamala Harris"
          votes={harrisVotes}
          onVote={() => handleVote('harris')}
          comments={harrisComments}
          addComment={addComment('harris')}
        />
      </div>
    </div>
  );
};

export default ElectionPage;
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';

const AnonymousPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      topic: 'Deepfake Awareness',
      content: 'Have you ever encountered a deepfake? Share your experience and how you dealt with it.',
      image: 'https://via.placeholder.com/600x400?text=Deepfake+Example',
      comments: [
        { id: 1, content: 'I saw a deepfake video on social media. It was quite disturbing!' },
        { id: 2, content: 'There are tools to detect deepfakes. Make sure to use them.' }
      ]
    },
    {
      id: 2,
      topic: 'Educational Resources',
      content: 'What are some good resources for learning more about deepfakes and their impact?',
      image: '',
      comments: [
        { id: 3, content: 'Check out the latest reports from cybersecurity organizations.' },
        { id: 4, content: 'There are great online courses about digital media security.' }
      ]
    }
  ]);
  const [newPost, setNewPost] = useState({ topic: '', content: '', image: '' });

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...newPost, id: Date.now(), comments: [] }]);
    setNewPost({ topic: '', content: '', image: '' });
  };

  const handleCommentSubmit = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId 
      ? { ...post, comments: [...post.comments, { id: Date.now(), content: comment }] } 
      : post
    ));
  };

  return (
    <Layout>
    <div className="bg-gray-800 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* New Post Section */}
      <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg mb-12">
        <h1 className="text-3xl font-bold text-teal-400 mb-6">Share Your Experience</h1>
        <form onSubmit={handlePostSubmit} className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-gray-300">Topic</label>
            <input
              id="topic"
              type="text"
              value={newPost.topic}
              onChange={(e) => setNewPost({ ...newPost, topic: e.target.value })}
              placeholder="Enter topic..."
              className="w-full p-3 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <textarea
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            placeholder="Write your experience or educational awareness here..."
            className="w-full p-3 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            rows="4"
            required
          />
          <input
            type="text"
            value={newPost.image}
            onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
            placeholder="Image URL (optional)"
            className="w-full p-3 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            Post
          </button>
        </form>
      </div>

      {/* Posts Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-300 mb-4">{post.topic}</h2>
            <p className="text-gray-300">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post" className="mt-4 w-full rounded-md" />
            )}
            <div className="mt-4 flex items-center space-x-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white py-1 px-3 rounded-md">Upvote</button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md">Downvote</button>
            </div>

            {/* Comments Section */}
            <div className="mt-6">
              <div className="space-y-4">
                {post.comments.map(comment => (
                  <div key={comment.id} className="bg-gray-600 p-4 rounded-lg">
                    <p className="text-gray-300">{comment.content}</p>
                  </div>
                ))}
              </div>
              <CommentForm postId={post.id} onCommentSubmit={handleCommentSubmit} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

const CommentForm = ({ postId, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(postId, comment);
    setComment('');
  };

  return (
    <form onSubmit={handleCommentSubmit} className="mt-6 flex space-x-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-3 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        rows="2"
        required
      />
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
      >
        Comment
      </button>
    </form>
  );
};

export default AnonymousPage;

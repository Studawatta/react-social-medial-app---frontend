import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContex } from '../../contex/AuthContext';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContex);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get('/post/profile/' + username)
        : await axios.get('post/timeline/' + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {!username || username === user.username ? <Share /> : ''}
        {posts.map((p) => {
          return (
            <Post
              post={p}
              key={p._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;

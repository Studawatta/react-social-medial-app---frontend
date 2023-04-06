import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import axios from 'axios';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get('/post/profile/' + username)
        : await axios.get('post/timeline/6420a0ab141230e800fb0cd7');
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
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

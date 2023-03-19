import React from 'react';
import './post.css';

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/propic4.jpg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Sandun Thisara</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
};

export default Post;

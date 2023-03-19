import React from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/propic4.jpg"
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder="What's in your mind Sandun?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon
                htmlColor="tomato"
                className="shareIcon"
              />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon
                htmlColor="blue"
                className="shareIcon"
              />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon
                htmlColor="green"
                className="shareIcon"
              />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon
                htmlColor="goldenrod"
                className="shareIcon"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;

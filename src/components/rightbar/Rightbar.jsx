import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = ({ Profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="assets/gift.png"
            alt=""
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Pola Foster </b>and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img
          src="assets/ad.jpg"
          alt=""
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Frineds</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online
              key={u.id}
              user={u}
            />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/propic1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/propic2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/propic3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/propic4.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/propic5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {Profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;

import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : ''}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/propic1.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/propic2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/propic3.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/propic4.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anuradha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/propic5.jpg`}
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
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;

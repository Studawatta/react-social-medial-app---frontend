import React from 'react';
import './profile.css';

import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PF}post/post1.jpg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}person/propic4.jpg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Sandun Thisara</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>
          <div className=" profileRightBottom">
            <Feed username="Sandun" />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

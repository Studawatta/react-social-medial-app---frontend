import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useContext } from 'react';
import { AuthContex } from '../../contex/AuthContext';
import {
  Searchbar,
  TopbarCenter,
  TopbarLeft,
  TopdarContainer,
  SearchInput,
  SearchbarIcon,
} from './topbarElements';

const Topbar = () => {
  const { user } = useContext(AuthContex);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <TopdarContainer>
      <TopbarLeft>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <span className="logo">Mysocial</span>
        </Link>
      </TopbarLeft>
      <TopbarCenter>
        <Searchbar>
          <SearchbarIcon />
          {/* <SearchIcon className="searchIcon" /> */}
          <SearchInput placeholder="Search for friend, post or video" />
        </Searchbar>
      </TopbarCenter>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </TopdarContainer>
  );
};

export default Topbar;

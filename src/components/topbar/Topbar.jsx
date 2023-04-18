import React from 'react';
import { Link } from 'react-router-dom';
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
  Logo,
  TopbarImg,
  TopbarRight,
  TopbarLink,
  TopbarIcons,
  TopbarIconItem,
  TopbarIconBadge,
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
          <Logo>MySocial</Logo>
        </Link>
      </TopbarLeft>
      <TopbarCenter>
        <Searchbar>
          <SearchbarIcon />
          {/* <SearchIcon className="searchIcon" /> */}
          <SearchInput placeholder="Search for friend, post or video" />
        </Searchbar>
      </TopbarCenter>
      <TopbarRight>
        <div className="topbarLinks">
          <TopbarLink>Homepage</TopbarLink>
          <TopbarLink>TimeLine</TopbarLink>
        </div>
        <TopbarIcons>
          <TopbarIconItem>
            <PersonIcon />
            <TopbarIconBadge>1</TopbarIconBadge>
          </TopbarIconItem>
          <TopbarIconItem>
            <ChatIcon />
            <TopbarIconBadge>2</TopbarIconBadge>
          </TopbarIconItem>
          <TopbarIconItem>
            <NotificationsIcon />
            <TopbarIconBadge>1</TopbarIconBadge>
          </TopbarIconItem>
        </TopbarIcons>

        <Link to={`/profile/${user.username}`}>
          <TopbarImg
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
          />
        </Link>
      </TopbarRight>
    </TopdarContainer>
  );
};

export default Topbar;

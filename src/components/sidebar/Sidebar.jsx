import React from 'react';

import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import { Users } from '../../dummyData';
import CloseFriend from '../CloseFriend/CloseFriend';
import {
  SidebarButton,
  SidebarContainer,
  SidebarFriendList,
  SidebarHr,
  SidebarList,
  SidebarListItem,
  SidebarListItemText,
  SidebarWrapper,
} from './sidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarList>
          <SidebarListItem>
            <RssFeedIcon className="sidebarIcon" />
            <SidebarListItemText>Feed</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <ChatIcon className="sidebarIcon" />
            <SidebarListItemText>Chats</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <PlayCircleIcon className="sidebarIcon" />
            <SidebarListItemText>Videos</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <GroupIcon className="sidebarIcon" />
            <SidebarListItemText>Groups</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <BookmarksIcon className="sidebarIcon" />
            <SidebarListItemText>Bookmarks</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <HelpOutlineIcon className="sidebarIcon" />
            <SidebarListItemText>Questions</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <WorkOutlineIcon className="sidebarIcon" />
            <SidebarListItemText>Jobs</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <EventIcon className="sidebarIcon" />
            <SidebarListItemText>Events</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <SchoolIcon className="sidebarIcon" />
            <SidebarListItemText>Courses</SidebarListItemText>
          </SidebarListItem>
        </SidebarList>

        <SidebarButton>Show More</SidebarButton>
        <SidebarHr></SidebarHr>
        <SidebarFriendList>
          {Users.map((u) => (
            <CloseFriend
              key={u.id}
              user={u}
            />
          ))}
        </SidebarFriendList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

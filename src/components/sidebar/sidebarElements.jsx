import styled from 'styled-components';

export const SidebarContainer = styled.div`
  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }
`;
export const SidebarWrapper = styled.div`
  padding: 20px;
`;
export const SidebarList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const SidebarListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const SidebarListItemText = styled.span`
  margin-left: 15px;
`;

export const SidebarButton = styled.button`
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
`;
export const SidebarHr = styled.hr`
  margin: 20px 0;
`;
export const SidebarFriendList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

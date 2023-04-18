import styled from 'styled-components';

export const Sidebar = styled.div`
  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;
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

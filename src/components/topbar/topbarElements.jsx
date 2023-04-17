import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const TopdarContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: #1877f2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const TopbarLeft = styled.div`
  flex: 3;
`;
export const Logo = styled.span`
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
export const TopbarCenter = styled.div`
  flex: 5;
`;
export const Searchbar = styled.div`
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;
export const SearchbarIcon = styled(SearchIcon)`
  font-size: 20px !important;
  margin-left: 10px;
`;
export const SearchInput = styled.input`
  border: none;
  width: 70%;
  &:focus {
    outline: none;
  }
`;
export const TopbarRight = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
export const TopbarLinks = styled.div``;
export const TopbarLink = styled.span`
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
`;
export const TopbarIcons = styled.div`
  display: flex;
`;
export const TopbarIconItem = styled.div`
  margin-right: 15px;
  cursor: pointer;
  position: relative;
`;
export const TopbarIconBadge = styled.span`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
export const TopbarImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

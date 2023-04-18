import styled from 'styled-components';

export const Container = styled.div`
  flex: 3.5;
`;
export const Wrapper = styled.div`
  padding: 20px 20px 0 0;
`;

export const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const BirthdayImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
export const BirthdayText = styled.span`
  font-weight: 300;
  font-size: 15px;
`;
export const Ad = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
`;
export const Title = styled.h4`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const FriendList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const FollowButton = styled.button`
  margin-top: 30px;
  margin-bottom: 10px;
  border: none;
  background-color: #1872f2;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const Info = styled.div`
  margin-bottom: 30px;
`;
export const InfoItem = styled.div`
  margin-bottom: 10px;
`;
export const InfoKey = styled.span`
  font-weight: 500;
  margin-right: 15px;
  color: #555;
`;
export const InfoValue = styled.span`
  font-weight: 300;
`;
export const Followings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Following = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const FollowingImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;
export const FollowingName = styled.span``;

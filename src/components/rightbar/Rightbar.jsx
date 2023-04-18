import React, { useEffect, useState, useContext } from 'react';
// import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../contex/AuthContext';
import { Add, Remove } from '@mui/icons-material';
import {
  Ad,
  BirthdayContainer,
  BirthdayImg,
  BirthdayText,
  Container,
  FollowButton,
  Following,
  FollowingImg,
  FollowingName,
  Followings,
  FriendList,
  Info,
  InfoItem,
  InfoKey,
  InfoValue,
  Title,
  Wrapper,
} from './rightbarElements';
const Rightbar = ({ user }) => {
  const { user: currentUser, dispatch } = useContext(AuthContex);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?.id));
  }, [currentUser, user]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (followed) {
        await axios.put('/users/' + user._id + '/unfollow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put('/users/' + user._id + '/follow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };

  const HomeRightbar = () => {
    return (
      <>
        <BirthdayContainer>
          <BirthdayImg
            src="assets/gift.png"
            alt=""
          />
          <BirthdayText>
            <b>Pola Foster </b>and <b>3 other friends</b> have a birthday today.
          </BirthdayText>
        </BirthdayContainer>
        <Ad
          src="assets/ad.jpg"
          alt=""
        />
        <Title>Online Frineds</Title>
        <FriendList>
          {Users.map((u) => (
            <Online
              key={u.id}
              user={u}
            />
          ))}
        </FriendList>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <FollowButton onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </FollowButton>
        )}
        <Title>User Information</Title>
        <Info>
          <InfoItem>
            <InfoKey>City:</InfoKey>
            <InfoValue>{user.city}</InfoValue>
          </InfoItem>

          <InfoItem>
            <InfoKey>From:</InfoKey>
            <InfoValue>{user.from}</InfoValue>
          </InfoItem>

          <InfoItem>
            <InfoKey>Relationship:</InfoKey>
            <InfoValue>
              {' '}
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : ''}
            </InfoValue>
          </InfoItem>
        </Info>

        <Title>User Friends</Title>
        <Followings>
          {friends.map((friend) => (
            <Link
              to={'/profile/' + friend.username}
              style={{ textDecoration: 'none' }}
            >
              <Following key={friend._id}>
                <FollowingImg
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + 'person/noAvatar.png'
                  }
                  alt=""
                />
                <FollowingName>{friend.username}</FollowingName>
              </Following>
            </Link>
          ))}
        </Followings>
      </>
    );
  };
  return (
    <Container>
      <Wrapper>{user ? <ProfileRightbar /> : <HomeRightbar />}</Wrapper>
    </Container>
  );
};

export default Rightbar;

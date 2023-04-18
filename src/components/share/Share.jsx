import React, { useContext, useRef, useState } from 'react';
// import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AuthContex } from '../../contex/AuthContext';
import axios from 'axios';
import {
  Bottom,
  Button,
  Container,
  Hr,
  Icon,
  Input,
  Option,
  Options,
  ProfileImg,
  Top,
  Wrapper,
} from './shareElements';

const Share = () => {
  const { user } = useContext(AuthContex);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const desc = useRef();

  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = file.name;
      data.append('file', file);
      data.append('name', fileName);
      newPost.img = fileName;
      try {
        await axios.post('/upload', data);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post('/post', newPost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          <ProfileImg
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt=""
          />

          <Input
            placeholder={"What's in your mind " + user.username + '?'}
            ref={desc}
          />
        </Top>
        <Hr />
        <Bottom onSubmit={submitHandler}>
          <Options>
            <Option htmlFor="file">
              <Icon>
                <PermMediaIcon htmlColor="tomato" />
              </Icon>
              <span>Photo or Video</span>
              <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                accept='".png,.jpeg,.jpg'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Option>

            <Option>
              <Icon>
                <LabelIcon htmlColor="blue" />
              </Icon>
              <span>Tag</span>
            </Option>

            <Option>
              <Icon>
                <LocationOnIcon
                  htmlColor="green"
                  className="shareIcon"
                />
              </Icon>
              <span>Location</span>
            </Option>

            <Option>
              <Icon>
                <EmojiEmotionsIcon
                  htmlColor="goldenrod"
                  className="shareIcon"
                />
              </Icon>
              <span>Feelings</span>
            </Option>
          </Options>

          <Button type="submit">Share</Button>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Share;

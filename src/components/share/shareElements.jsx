import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16pxpx -8px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;
export const Wrapper = styled.div`
  padding: 10px;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const Input = styled.input`
  border: none;
  width: 80%;
  &:focus {
    outline: none;
  }
`;
export const Hr = styled.hr`
  margin: 20px;
`;
export const Bottom = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Options = styled.div`
  display: flex;
  margin-left: 20px;
`;
export const Option = styled.label`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;
export const Icon = styled.div`
  font-size: 18px;
  margin-right: 3px;
`;

export const Button = styled.button`
  border: none;
  padding: 7px;
  border-radius: 5px;
  background-color: green;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  color: white;
`;

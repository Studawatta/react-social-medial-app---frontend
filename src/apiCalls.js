import axios from 'axios';

export const loginCall = async (userCredendial, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post('auth/login', userCredendial);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error });
  }
};

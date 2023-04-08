import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '6420a0cd141230e800fb0cd9',
    username: 'Thisara',
    email: 'thisara@gmail.com',
    password: '$2b$10$OUBB97yCP6wl4lhNwXVV3egXVJC9Kw6CfIVsrYJRkxk.PFKgeYr9u',
    profilePicture: '',
    coverPicture: '',
    followers: [],
    followings: ['6420a0ab141230e800fb0cd7'],
    isAdmin: false,
    createdAt: { $date: { $numberLong: '1679859917729' } },
    updatedAt: { $date: { $numberLong: '1679859983926' } },
    __v: { $numberInt: '0' },
  },
  isFetching: false,
  error: false,
};

export const AuthContex = createContext(INITIAL_STATE);

export const AuthContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContex.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};

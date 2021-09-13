import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseAuth } from './utils/firebase';

const Auth: React.FC = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    console.log(process.env.REACT_APP_HUGA);
    firebaseAuth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        //ログインしてる
      } else {
        //ログインしてない
        history.push('/signup');
      }
    });
  }, []);
  return <div>{children}</div>;
};

export default Auth;

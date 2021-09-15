import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../stores/slices/userSlice';
import { auth } from '../../utils/firebase';

const Authed: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    console.log(process.env.REACT_APP_HUGA);
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        //ログインしてる
        //reduxでuserを参照して、ログインしてなかったら更新する
        dispatch(login(user.uid));
      } else {
        //ログインしてない
        history.push('/signup');
      }
    });
  }, []);
  return <div>{children}</div>;
};

export default Authed;

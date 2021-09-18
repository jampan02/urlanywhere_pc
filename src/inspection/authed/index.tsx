import { query } from 'express';
import { collection, limit, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCategory } from '../../stores/slices/categorySlice';
import { login } from '../../stores/slices/userSlice';
import { auth, db } from '../../utils/firebase';

const Authed: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const f = async () => {
      await auth.onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          //ログインしてる
          //reduxでuserを参照して、ログインしてなかったら更新する
          dispatch(login(user.uid));
          //全てのカテゴリを登録
          const allCategoriesRef = collection(db, `users/${user.uid}/categories/`);
          getDocs(allCategoriesRef).then(function (querySnapshot) {
            const data: any[] = [];
            querySnapshot.forEach(function (doc) {
              const id = doc.id;
              data.push({ ...doc.data(), id });
              console.log(data);
            });
            dispatch(setCategory(data));
          });
        } else {
          //ログインしてない
          history.push('/signup');
        }
      });
    };

    f();
  }, []);
  return <div>{children}</div>;
};

export default Authed;

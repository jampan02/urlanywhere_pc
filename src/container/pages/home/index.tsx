import React, { useEffect, useState } from 'react';
import LatestUrls from '../../organisms/home/latestPosts';
import { auth, db } from '../../../utils/firebase';
import { collection, doc, getDoc, setDoc, getDocs, addDoc } from '@firebase/firestore';
import { useSelector } from 'react-redux';
import { Post } from '../../../types/post';

const Home = () => {
  const currentUser = useSelector((user: any) => user);
  const [url, setUrl] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const onAddPost = async () => {
    //setDoc(db, `users/${currentUser.user.id}`)
    const data = {
      url,
      title: 'aaa',
      category: '未分類',
    };
    await addDoc(collection(db, `users/${currentUser.user.currentUser}/posts/`), data);
  };
  useEffect(() => {
    if (currentUser.user.isLogin) {
      getDocs(collection(db, `users/${currentUser.user.currentUser}/posts/`)).then(function (
        querySnapshot
      ) {
        const data: any = [];
        querySnapshot.forEach(function (doc) {
          data.push(doc.data());
        });

        setPosts(data);
      });
      console.log(currentUser);
    }
  }, [currentUser]);
  const onLogOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <LatestUrls setValue={setUrl} value={url} submit={onAddPost} posts={posts} />
      <button onClick={onLogOut}>ログアウト</button>
    </div>
  );
};

export default Home;

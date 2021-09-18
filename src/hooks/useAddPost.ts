import axios from 'axios';
import { serverTimestamp, addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db, auth } from './../utils/firebase';

export const useAddPost = () => {
  const userId = useSelector((user: any) => user.user.currentUser);
  const [postModalIsOpen, setPostModalIsOpen] = useState(false);
  const [categoryOfNewPost, setCategoryOfNewPost] = useState('未分類');
  const [urlOfNewPost, setUrlOfNewPost] = useState('');
  const [categoryIdOfNewPost, setCategoryIdOfNewPost] = useState('');
  const onAddPost = async () => {
    const title: string = await axios
      .get(`http://localhost:4000/get/title/`, { params: { url: urlOfNewPost } })
      .then((res) => {
        return res.data.title;
      });
    //categoryId取得関数
    const data = {
      url: urlOfNewPost,
      title,
      categoryId: categoryIdOfNewPost,
      category: categoryOfNewPost,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    console.log(data);
    await addDoc(collection(db, `users/${userId}/posts/`), data);
  };
  const onChangeCategory = (e: { target: { value: any } }) => {
    console.log(typeof e.target.value);
    console.log(e.target.value.split(','));
    const data = e.target.value.split(',');
    setCategoryOfNewPost(data[0]);
    setCategoryIdOfNewPost(data[1]);
  };
  return {
    categoryOfNewPost,
    setCategoryOfNewPost,
    urlOfNewPost,
    setUrlOfNewPost,
    onAddPost,
    onChangeCategory,
    postModalIsOpen,
    setPostModalIsOpen,
    categoryIdOfNewPost,
    setCategoryIdOfNewPost,
  };
};

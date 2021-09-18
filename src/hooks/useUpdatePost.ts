import axios from 'axios';
import { serverTimestamp, updateDoc, doc, collection, getDoc } from 'firebase/firestore';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from './../utils/firebase';

export const useUpdatePost = () => {
  const userId = useSelector((user: any) => user.user.currentUser);
  const [editCategoryOfNewPost, setEditCategoryOfNewPost] = useState('');
  const [editUrlOfNewPost, setEditUrlOfNewPost] = useState('');
  const [targetPostId, setTargetPostId] = useState('');
  const [editPostModalIsOpen, setEditPostModalIsOpen] = useState(false);
  const onUpdatePost = async () => {
    console.log('will update!');
    const title: string = await axios
      .get(`http://localhost:4000/get/title/`, { params: { url: editUrlOfNewPost } })
      .then((res) => {
        return res.data.title;
      });
    const data = {
      url: editUrlOfNewPost,
      category: editCategoryOfNewPost,
      title,
      updatedAt: serverTimestamp(),
    };
    console.log(targetPostId);
    console.log(data);
    await updateDoc(doc(db, `users/${userId}/posts/${targetPostId}/`), data);
  };
  const onChangeCategoryByEdit = (e: { target: { value: string } }) => {
    setEditCategoryOfNewPost(e.target.value);
  };
  const onOpenEditPostModal = async (id: string) => {
    console.log(userId, id);
    console.log('will open modal!');
    await getDoc(doc(db, `users/${userId}/posts/${id}`)).then(function (querySnapshot) {
      const data = querySnapshot.data();
      console.log(data);
      if (data) {
        setEditCategoryOfNewPost(data.category);
        setEditUrlOfNewPost(data.url);
        setTargetPostId(id);
      }
    });
    //idから対象docを探して、そのurl,title,categoryをセットする

    setEditPostModalIsOpen(true);
  };
  return {
    onChangeCategoryByEdit,
    editCategoryOfNewPost,
    setEditCategoryOfNewPost,
    editUrlOfNewPost,
    setEditUrlOfNewPost,
    onUpdatePost,
    targetPostId,
    setTargetPostId,
    onOpenEditPostModal,
    editPostModalIsOpen,
    setEditPostModalIsOpen,
  };
};

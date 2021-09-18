import React, { useEffect, useState } from 'react';
import LatestUrls from '../../organisms/home/post/latestPosts';
import { auth, db } from '../../../utils/firebase';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  addDoc,
  limit,
  query,
  serverTimestamp,
  updateDoc,
} from '@firebase/firestore';
import { useSelector } from 'react-redux';
import { Post } from '../../../types/post';
import axios from 'axios';
import PostModal from '../../organisms/home/post/PostModal/index';
import { Category } from '../../../types/category/index';
import AllCategories from '../../organisms/home/category/latestCategories';
import CategoryModal from '../../organisms/home/category/categoryModal';
import Modal from 'react-modal';
import { onLogOut } from '../../../api';
import { useAddPost } from '../../../hooks/useAddPost';
import { useAddCategory } from '../../../hooks/useAddCategory';
import { useUpdatePost } from '../../../hooks/useUpdatePost';
import { orderBy } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import { useUpdateCategory } from '../../../hooks/useUpdateCategory';
const Home = () => {
  const history = useHistory();
  const userId = useSelector((user: any) => user.user.currentUser);
  const {
    onOpenEditCategoryModal,
    onUpdateCategory,
    editCategoryModalIsOpen,
    setEditCategoryModalIsOpen,
    targetCategoryId,
    setTargetCategoryId,
    editCategoryName,
    setEditCategoryName,
  } = useUpdateCategory();
  const {
    categoryOfNewPost,
    urlOfNewPost,
    setUrlOfNewPost,
    onAddPost,
    onChangeCategory,
    postModalIsOpen,
    setPostModalIsOpen,
    categoryIdOfNewPost,
    setCategoryIdOfNewPost,
  } = useAddPost();
  const { newCategoryName, setNewCategoryName, onAddCategory } = useAddCategory();
  const {
    editCategoryOfNewPost,
    editUrlOfNewPost,
    setEditUrlOfNewPost,
    onChangeCategoryByEdit,
    onUpdatePost,
    onOpenEditPostModal,
    editPostModalIsOpen,
    setEditPostModalIsOpen,
  } = useUpdatePost();
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);

  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);

  useEffect(() => {
    const f = async () => {
      if (userId) {
        //ログインされてる場合
        //最新の投稿取得

        const latestPostsRef = collection(db, `users/${userId}/posts/`);
        const postsQuery = query(latestPostsRef, limit(5), orderBy('updatedAt', 'asc'));
        await getDocs(postsQuery).then(function (querySnapshot) {
          const data: any[] = [];
          querySnapshot.forEach(function (doc) {
            const id = doc.id;

            data.push({ ...doc.data(), id });
          });
          console.log(data);

          setLatestPosts(data);
        });
        //最新のカテゴリ取得
        const latestCategoriesRef = collection(db, `users/${userId}/categories/`);
        const categoriesQuery = query(latestCategoriesRef, limit(5));
        await getDocs(categoriesQuery).then(function (querySnapshot) {
          const data: any[] = [];
          querySnapshot.forEach(function (doc) {
            const id = doc.id;

            data.push({ ...doc.data(), id });
            console.log(data);
          });
          console.log(data);
          setAllCategories(data);
        });
      }
    };
    f();
  }, [userId]);
  console.log(categoryOfNewPost);
  const onReadMorePosts = () => history.push('/posts/all');
  return (
    <div>
      <LatestUrls posts={latestPosts} onClick={{ onOpenEditPostModal, onReadMorePosts }} />
      <AllCategories categories={allCategories} onClick={onOpenEditCategoryModal} />
      <button onClick={() => setPostModalIsOpen(true)}>Open Post Modal</button>
      <Modal isOpen={postModalIsOpen}>
        <button onClick={() => setPostModalIsOpen(false)}>Close Modal</button>
        <PostModal
          post={{
            url: { value: urlOfNewPost, setValue: setUrlOfNewPost },
            onSubmit: onAddPost,
            select: {
              onChange: onChangeCategory,
              options: allCategories,
              value: { name: categoryOfNewPost, id: categoryIdOfNewPost },
            },
          }}
          title="URL追加"
        />
      </Modal>
      <Modal isOpen={editPostModalIsOpen}>
        <button onClick={() => setEditPostModalIsOpen(false)}>Close Modal</button>
        <PostModal
          edit
          post={{
            url: { value: editUrlOfNewPost, setValue: setEditUrlOfNewPost },
            onSubmit: onUpdatePost,

            select: {
              onChange: onChangeCategoryByEdit,
              options: allCategories,
              value: { name: editCategoryOfNewPost, id: '' },
            },
          }}
          title="URL編集"
        />
      </Modal>
      <Modal isOpen={categoryModalIsOpen}>
        <button onClick={() => setCategoryModalIsOpen(false)}>Close Modal</button>
        <CategoryModal
          category={{
            name: { value: newCategoryName, setValue: setNewCategoryName },
            onSubmit: onAddCategory,
          }}
          title="カテゴリー追加"
        />
      </Modal>
      <Modal isOpen={editCategoryModalIsOpen}>
        <button onClick={() => setEditCategoryModalIsOpen(false)}>Close Modal</button>
        <CategoryModal
          edit
          category={{
            name: { value: editCategoryName, setValue: setEditCategoryName },
            onSubmit: onUpdateCategory,
          }}
          title="カテゴリー編集"
        />
      </Modal>
      <button onClick={onLogOut}>ログアウト</button>
    </div>
  );
};

export default Home;

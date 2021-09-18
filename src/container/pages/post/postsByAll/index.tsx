import { query } from 'express';
import { getDocs, collection, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import PostModal from '../../../../container/organisms/home/post/PostModal';
import { useUpdatePost } from '../../../../hooks/useUpdatePost';
import { Post } from '../../../../types/post';
import { db } from '../../../../utils/firebase';
import Modal from 'react-modal';
import AllPosts from '../../../organisms/home/post/allPosts';
const PostsByAll = () => {
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
  const userId = useSelector((user: any) => user.user.currentUser);
  const allCategories = useSelector((category: any) => category.category.categories);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  useEffect(() => {
    const f = async () => {
      if (userId) {
        await getDocs(collection(db, `users/${userId}/posts/`)).then(function (querySnapshot) {
          const data: any[] = [];
          querySnapshot.forEach(function (doc) {
            const id = doc.id;
            data.push({ ...doc.data(), id });
          });
          console.log(data);
          setAllPosts(data);
        });
      }
    };
    f();
  }, [userId]);
  return (
    <div>
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
      <AllPosts h1="全てのURL" posts={allPosts} onClick={onOpenEditPostModal} />
    </div>
  );
};

export default PostsByAll;

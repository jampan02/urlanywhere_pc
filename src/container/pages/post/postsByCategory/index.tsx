import { getDocs, collection, where, query, FieldPath } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AllPosts from '../../../organisms/home/post/allPosts';
import { Post } from '../../../../types/post';
import { db } from '../../../../utils/firebase';
import { useUpdatePost } from '../../../../hooks/useUpdatePost';
import Modal from 'react-modal';
import PostModal from '../../../../container/organisms/home/post/PostModal';
import { documentId } from 'firebase/firestore';

const PostsByCategory = () => {
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
  const [categoryName, setCategoryName] = useState('');
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const location = useLocation();
  useEffect(() => {
    const f = async () => {
      const targetPath = location.pathname.split('/').pop();
      console.log(targetPath);
      if (targetPath && userId) {
        setCategoryName(targetPath);
        await getDocs(collection(db, `users/${userId}/categories/`)).then(function (querySnapshot) {
          const data: any[] = [];
          querySnapshot.forEach(function (doc) {
            data.push(doc.id);
          });
          data.forEach(async (categoryId) => {
            console.log(categoryId);
            if (categoryId === targetPath) {
              console.log('Match!');
              const postsByCategoryRef = collection(db, `users/${userId}/posts/`);
              const q = query(postsByCategoryRef, where('categoryId', '==', categoryId));
              await getDocs(q).then(function (querySnapshot) {
                const data: any[] = [];
                querySnapshot.forEach(function (doc) {
                  const id = doc.id;
                  data.push({ ...doc.data(), id });
                });
                console.log(data);
                setAllPosts(data);
              });
            }
          });
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
      <AllPosts
        h1={`${categoryName}に保存されたURL`}
        posts={allPosts}
        onClick={onOpenEditPostModal}
      />
    </div>
  );
};

export default PostsByCategory;

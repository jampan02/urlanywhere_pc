import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from './../utils/firebase';

export const useAddCategory = () => {
  const userId = useSelector((user: any) => user.user.currentUser);
  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const onAddCategory = async () => {
    await addDoc(collection(db, `users/${userId}/categories/`), {
      name: newCategoryName,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  };

  return {
    newCategoryName,
    setNewCategoryName,
    onAddCategory,
    categoryModalIsOpen,
    setCategoryModalIsOpen,
  };
};

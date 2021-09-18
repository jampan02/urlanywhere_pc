import { addDoc, collection, doc, getDoc, serverTimestamp } from '@firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from './../utils/firebase';

export const useUpdateCategory = () => {
  const userId = useSelector((user: any) => user.user.currentUser);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [targetCategoryId, setTargetCategoryId] = useState('');
  const [editCategoryModalIsOpen, setEditCategoryModalIsOpen] = useState(false);
  const onUpdateCategory = async () => {
    const data = {
      name: editCategoryName,
      updatedAt: serverTimestamp(),
    };

    await updateDoc(doc(db, `users/${userId}/categories/${targetCategoryId}/`), data);
  };
  const onOpenEditCategoryModal = async (id: string) => {
    console.log(userId, id);
    console.log('will open modal!');
    await getDoc(doc(db, `users/${userId}/categories/${id}`)).then(function (querySnapshot) {
      const data = querySnapshot.data();
      console.log(data);
      if (data) {
        setEditCategoryName(data.name);

        setTargetCategoryId(id);
      }
      console.log(data);
    });
    //idから対象docを探して、そのurl,title,categoryをセットする

    setEditCategoryModalIsOpen(true);
  };
  return {
    onOpenEditCategoryModal,
    onUpdateCategory,
    editCategoryModalIsOpen,
    setEditCategoryModalIsOpen,
    targetCategoryId,
    setTargetCategoryId,
    editCategoryName,
    setEditCategoryName,
  };
};

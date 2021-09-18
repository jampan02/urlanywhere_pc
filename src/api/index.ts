import axios from 'axios';
import { serverTimestamp, addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db, auth } from './../utils/firebase';

export const onLogOut = () => {
  auth.signOut();
};

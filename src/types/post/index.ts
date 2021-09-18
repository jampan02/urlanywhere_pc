import { FieldValue, Timestamp } from 'firebase/firestore';

export interface Post {
  id: string;
  title: string;
  url: string;
  category: string;
  categoryId: string;
  createdAt?: Timestamp;
  updatedAt: Timestamp;
  userId?: string;
}

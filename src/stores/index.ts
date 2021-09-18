import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
// それぞれのSliceを呼び出して結合する
export default configureStore({
  reducer: {
    // 識別する名前: importしてきたReducer名
    user: userReducer,
    category: categoryReducer,
  },
});

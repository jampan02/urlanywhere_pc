import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../../types/category/index';

// 非同期はSliceの外に出してcreateAsyncThunkを使用する
export const fetchAsyncLogin = createAsyncThunk('login/get', async () => {
  //  ログインAPIを叩く想定
  await axios.get('');
  //   console.log(res.data)
});

const categorySlice = createSlice({
  //   slice名
  name: 'category',
  //   初期値
  initialState: {
    categories: [],
  },
  //各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
  //   非同期の結果を受け取る
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      //state.isLogin = true;
    });
  },
});

// actionをexport
export const { setCategory } = categorySlice.actions;
// state情報をexport
export const selectUser = (state: { categories: Category[] }) => state;
// reducerをexport → storeへ
export default categorySlice.reducer;

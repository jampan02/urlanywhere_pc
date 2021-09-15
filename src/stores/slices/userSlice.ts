import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 非同期はSliceの外に出してcreateAsyncThunkを使用する
export const fetchAsyncLogin = createAsyncThunk('login/get', async () => {
  //  ログインAPIを叩く想定
  await axios.get('');
  //   console.log(res.data)
});

const userSlice = createSlice({
  //   slice名
  name: 'user',
  //   初期値
  initialState: {
    currentUser: {
      userId: '',
    },
    isLogin: false,
  },
  //各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
    logout: (state, action) => {
      state.isLogin = false;
      state.currentUser = { userId: '' };
    },
    login: (state, action) => {
      state.currentUser = action.payload;
      state.isLogin = true;
    },
  },
  //   非同期の結果を受け取る
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.isLogin = true;
    });
  },
});

// actionをexport
export const { login, logout } = userSlice.actions;
// state情報をexport
export const selectUser = (state: { currentUser: { userId: string }; isLogin: boolean }) => state;
// reducerをexport → storeへ
export default userSlice.reducer;

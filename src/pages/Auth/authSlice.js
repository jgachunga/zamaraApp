import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AUTH } from '../../services/endpoints';
import * as Api from '../../services/httpClient';

export const authLogin = createAsyncThunk(
  'auth/login', 
  async(payload) => {
    const response = await Api.axiosAuthApi.post(AUTH.login, payload);
    return response.data;
  }
);

const initialState = {
  isLoggedIn : false,
  status: 'idle',
  error: null,
  user: null,
  token : null,
  avatarUrl: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError : (state) => {
      state.error = null;
      state.status = 'idle';
    },
    logOutUser : (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
  extraReducers : (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.status = 'pending';
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
          state.token = action.payload?.token;
          state.isLoggedIn = true;
          state.user = action.payload;
          AsyncStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoggedIn = false;
        state.error = action.error.message;
      });
  }
});

export const { resetError, logOutUser } = authSlice.actions;

export default authSlice.reducer;
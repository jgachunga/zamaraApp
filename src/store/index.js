import { combineReducers, configureStore } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import authSlice from '../pages/Auth/authSlice';

const reducers = combineReducers({
  auth : authSlice,
});

const store = configureStore({
  reducer: reducers,
});

export {
  store,
};
import storage from "redux-persist/lib/storage";
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist'

import userReducer from '../slice/userSlice';

const userPersistConfig = {
  key: 'user',
  storage
}

const store = configureStore({
  reducer: { user: persistReducer(userPersistConfig, userReducer)},
  middleware: getDefaultMiddleware => getDefaultMiddleware(
    {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }
  ),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;
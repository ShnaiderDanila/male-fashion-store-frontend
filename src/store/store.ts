import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from 'src/store/slices/userSlice';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';
import { api } from '../utils/api/base.api';

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  filterReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

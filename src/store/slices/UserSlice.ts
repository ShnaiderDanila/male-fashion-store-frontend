import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from '../../types/entities/user-entity';

export interface UserState {
  currentUser: TUser | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<TUser>) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = null;
      localStorage.removeItem('token');
    },
  },
});

export const { updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

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
    userSignIn: (state, action: PayloadAction<TUser>) => {
      state.currentUser = action.payload;
    },
    userSignOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { userSignIn, userSignOut } = userSlice.actions;
export default userSlice.reducer;

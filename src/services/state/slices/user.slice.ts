import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../libs/types/user.type";

export interface IinitialState {
  users: IUser[] | undefined;
  error: boolean;
}

const initialState: IinitialState = {
  users: undefined,
  error: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateUserData: (
      state: IinitialState,
      action: PayloadAction<IinitialState>
    ) => {
      state.users = action.payload.users;
      state.error = action.payload.error;
    },
  },
});

export const { updateUserData } = userSlice.actions;

export default userSlice.reducer;

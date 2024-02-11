import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import { IinitialState as IuserReducer } from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  userReducer: IuserReducer;
};

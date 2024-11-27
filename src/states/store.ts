import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authenticatorSlice from "@src/states/authentication/authenticatorSlice";
import accessTokenSlice from "./authentication/accessTokenSlice";
import userNameSlice from "./authentication/userNameSlice";

export const store = configureStore({
  reducer: {
    authenticator: authenticatorSlice,
    accessToken: accessTokenSlice,
    userName: userNameSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
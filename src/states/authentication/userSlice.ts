import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserDataType = {
  email: string;
  first_name?: string;
  last_name?: string;
  username: string;
  avatar?: string;
  created_at: string;
  last_login?: string;
  wins?: number;
  losses?: number;
  draws?: number;
  matches_played?: number;
  is2fa: boolean;
  is_online: boolean;
  is_blocked: boolean;
  rank?: number;
  level?:number;
};

interface AuthenticatorState {
  value: UserDataType ;
}

const initialState: AuthenticatorState = { value: {
  email: "",
  username: "",
  created_at: "",
  is2fa: false,
  is_online: false,
  is_blocked: false
} };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDataType>) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

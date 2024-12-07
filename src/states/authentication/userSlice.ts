import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserDataType = {
    email?: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    avatar?: string;
    bio?:string;
    is_valid?: boolean;
    is_active?: boolean;
    is_staff?: boolean;
    is_superuser?:boolean;
    pyotp_secret?:boolean;
    created_at?: string,
    last_login?: string,
    wins?: number,
    losses?: number,
    draws?: number,
    matches_played?: number,
    is2fa?: boolean
}

interface AuthenticatorState {
    value: UserDataType,

}

const initialState: AuthenticatorState = {value: {}};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserDataType>) => {
            state.value = action.payload;
        }
    }
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;

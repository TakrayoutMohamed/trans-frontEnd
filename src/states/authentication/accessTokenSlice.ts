import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthenticatorState {
    accessToken: string,
}

const initialState: AuthenticatorState = {accessToken: ""};

const accessTokenSlice = createSlice({
    name: "accessToken",
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        }
    }
});

export const {setAccessToken} = accessTokenSlice.actions;

export default accessTokenSlice.reducer;

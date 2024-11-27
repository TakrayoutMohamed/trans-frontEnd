import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthenticatorState {
    value: string | undefined,
}

const initialState: AuthenticatorState = {value: undefined};

const userNameSlice = createSlice({
    name: "userName",
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string | undefined>) => {
            state.value = action.payload;
        }
    }
});

export const {setUserName} = userNameSlice.actions;

export default userNameSlice.reducer;

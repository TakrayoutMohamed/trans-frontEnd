import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDataType } from "./userSlice";

interface AuthenticationState{
    value: UserDataType[]
}

const initialState: AuthenticationState = {value: []}

const blockedSlice = createSlice({
    name: "blocked",
    initialState,
    reducers: {
        setBlocked: (state, action: PayloadAction<UserDataType[]>) => {
            state.value = action.payload;
        }
    }
})

export const {setBlocked} = blockedSlice.actions;

export default blockedSlice.reducer;
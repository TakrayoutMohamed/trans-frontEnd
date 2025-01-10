import { UserDataType } from "@/src/customDataTypes/UserDataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthenticationState{
    value: UserDataType[]
}

const initialState: AuthenticationState = {value: []}

const conversationsSlice = createSlice({
    name: "conversations",
    initialState,
    reducers: {
        setNotifications: (state, action: PayloadAction<UserDataType[]>) => {
            state.value = action.payload;
        }
    }
})

export const {setNotifications} = conversationsSlice.actions;

export default conversationsSlice.reducer;
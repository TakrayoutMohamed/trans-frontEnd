import { NotificationsDataType } from "@/src/customDataTypes/NotificationsDataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthenticationState{
    value: NotificationsDataType[]
}

const initialState: AuthenticationState = {value: []}

const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        setNotifications: (state, action: PayloadAction<[]>) => {
            state.value = action.payload;
        }
    }
})

export const {setNotifications} = notificationsSlice.actions;

export default notificationsSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models/userInfo";
import { authSlice } from "./state/authSlice";

export interface AppStore {
    auth: UserInfo;
}

export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})


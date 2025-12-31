import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = JSON.parse(localStorage.getItem("user"));


export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        user: userFromStorage,
        isAuthenticated: !!userFromStorage, // !!- double not -> convert value to pure boolean
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user");
        }
    }
})

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
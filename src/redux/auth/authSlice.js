import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isRefreshUser: false,
        isLoggedIn: false,
        token: null,
        user: {
            name: null,
            email: null,
        },
    }
})


export default authSlice.reducer;
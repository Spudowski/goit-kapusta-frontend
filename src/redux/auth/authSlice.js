import { createSlice } from "@reduxjs/toolkit"
import { logIn, logOut, register } from "./authOperations"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
        refreshToken: null,
        sid: null,
        userData: {
            email: null,
            balance: null,
            id: null,
            transactions: [],
        },
        error: null,
    },

    extraReducers: (builder) => {
        builder
            
            // .addCase(register.pending, onPending)
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLoggedIn = true
                state.accessToken = action.payload.accessToken
                state.refreshToken = action.payload.refreshToken
                state.sid = action.payload.sid
                state.userData = action.payload.userData
            })

            .addCase(register.rejected, (state, { payload }) => {
                state.isLoading = false
                state.error = payload
            })

            // .addCase(logIn.pending, onPending)
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLoggedIn = true
                state.accessToken = action.payload.accessToken
                state.refreshToken = action.payload.refreshToken
                state.sid = action.payload.sid
                state.userData = action.payload.userData

                console.log('Pomyślnie zalogowano:', action.payload.userData)
                console.log('sid uzytkownika:', action.payload.sid)
                console.log('Dostępny token:', action.payload.accessToken)
            })
                
            .addCase(logIn.rejected, (state) => {
                state.isLoading = false
                state.isLoggedIn = false
                state.accessToken = null;
                state.refreshToken = null;
                state.sid = null;
                state.userData = {
                    email: null,
                    balance: null,
                    id: null,
                    transactions: [],
                }
            })
            
            // .addCase(logOut.pending, onPending)
            .addCase(logOut.fulfilled, (state) => {
                state.isLoading = false
                state.isLoggedIn = false
                state.accessToken = null;
                state.refreshToken = null;
                state.sid = null;
                state.userData = {
                    email: null,
                    balance: null,
                    id: null,
                    transactions: [],
                }
            })

            .addCase(logOut.rejected, (state) => {
                state.isLoading = false
                state.isLoggedIn = false
                state.accessToken = null;
                state.refreshToken = null;
                state.sid = null;
                state.userData = {
                    email: null,
                    balance: null,
                    id: null,
                    transactions: [],
                };
            })
    }
})

export default authSlice.reducer
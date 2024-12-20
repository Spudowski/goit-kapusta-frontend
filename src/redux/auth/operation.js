import Axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


const axios = Axios.create({
    baseURL: 'http://localhost:3000'
  });


//User registration
export const addUser = createAsyncThunk(
    'addUser/fetchaAddUser', 
    async(newUser) => {
        const resp = await axios.post('/auth/register',
            //newUser
            {
                "name": "Olaf",
                "email": "user@example.com",
                "password": "qwerty123"
            }

        )
        return resp.data
})


///User authentication
// export const signInUser = createAsyncThunk(
//     'signIn/fetchSignIn',
//     async(user) => {
//         const resp = await axios.post('/auth/login',
//             //user
//             {
//                 "email": "user@example.com",
//                 "password": "qwerty123"
//             }
//         )
//         return resp.data
//     })

// Logowanie użytkownika
export const signInUser = createAsyncThunk(
    'signIn/fetchSignIn', 
    async(user) => {
        const resp = await axios.post('/auth/login',
            //user
            {
                "email": "user@example.com",
                "password": "qwerty123"
            }
        )
        return resp.data
})

//Logout
export const signOutUser = createAsyncThunk(
  "signOut/fetchSignOut",
  async (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const resp = await axios.post("/auth/logout");
    return resp;
  }
);

//Get new pair of tokens (use Bearer {refreshToken} instead of accessToken)

export const refreshUserToken = createAsyncThunk(
  "refreshUserToken/fetchRefreshUserToken",
  async (sessionsId) => {
    const resp = await axios.post(
      "/auth/refresh",
      //sessionsId
      {
        sid: "507f1f77bcf86cd799439011",
      }
    );
    return resp;
  }
);

//Google authentication. WARNING: Works only for sign-in, after registered on front-end (if you're writing your back-end for a SPECIFIC front-end, then you can configure it right to work both for sign-up & sign-in)
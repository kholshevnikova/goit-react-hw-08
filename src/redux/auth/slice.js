import { createSlice } from "@reduxjs/toolkit";
import { logOut, login, refreshUser, register } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
        name: null,
        email: null,
  },
  token: null,
  isLoggedIn: false,
    isRefreshing: false,
      isRegistering: false,
    
  }, 
  extraReducers: builder => builder.addCase(register.pending, (state) => {
    state.isRegistering = true;  
  }).addCase(register.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.isRegistering = false;

  }).addCase(register.rejected, (state) => {
    state.isRegistering = false;
    } ).addCase(login.pending, (state) => {
    state.isRegistering = true;  
  }).addCase(login.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.isRegistering = false;

  } ).addCase(login.rejected, (state) => {
    state.isRegistering = false;
    }).addCase(logOut.fulfilled, (state) => {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
    state.isLoggedIn = false;
    }).addCase(logOut.rejected, (state) => {
      state.user = {
        name: null,
        email: null,
      };
     state.token = null; 
    state.isLoggedIn = false;
    }).addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    }).addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    }).addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
  })
})

export default authSlice.reducer;
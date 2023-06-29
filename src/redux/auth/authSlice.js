import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { userName: null, email: null },
    token: null,
    isLoggedIn: false,
    isUserLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, (state, _) => {
        state.isUserLoading = true;
      })

      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.register.rejected, (state, _) => {
        state.isUserLoading = false;
      })
      .addCase(authOperations.logIn.pending, (state, _) => {
        state.isUserLoading = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.rejected, (state, _) => {
        state.isUserLoading = false;
      })
      .addCase(authOperations.logOut.pending, (state, _) => {
        state.isUserLoading = true;
      })
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { userName: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logOut.rejected, (state, _) => {
        state.isUserLoading = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state, _) => {
        state.isUserLoading = true;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isUserLoading = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state, _) => {
        state.isUserLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;

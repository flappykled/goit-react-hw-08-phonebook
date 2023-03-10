import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { register, logIn, LogOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetching: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast.success('You are successfully registered');
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
      if (state.error === 400) {
        toast.error('You have already registered');
      } else {
        toast.error('Something went wrong');
      }
    });

    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast.success('You are successfully logged in');
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
      if (state.error === 400) {
        toast.error('Tray again');
      } else {
        toast.error('Something went wrong');
      }
    });

    builder.addCase(LogOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      toast.warning('You are logged out');
    });

    builder.addCase(fetchCurrentUser.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.isLoggedIn = true;
    });
    builder.addCase(fetchCurrentUser.rejected, state => {
      state.isFetching = false;
    });
  },
});
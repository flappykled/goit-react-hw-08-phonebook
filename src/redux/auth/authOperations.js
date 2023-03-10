import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const LogOut = createAsyncThunk('auth/LogOut', async (_, thunkAPI) => {
  try {
    await axios.post(`/users/logout`);
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get(`/users/current`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
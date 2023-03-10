import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContact = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const editContact = createAsyncThunk('contacts/editContact', async ({ id, name, number, navig }, thunkAPI) => {
  const state = thunkAPI.getState();
  const oldName = state.contacts.items.find(el => el.name === name && el.number === number);

  if (oldName) {
    return thunkAPI.rejectWithValue(oldName);
  }
  try {
    const obj = { name, number };
    const { data } = await axios.patch(`/contacts/${id}`, obj);
    navig();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

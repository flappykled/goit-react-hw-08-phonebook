import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchContact, addContact, deleteContact, editContact } from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContact.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
      toast.success('New contact added');
    });
    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
      state.isLoading = false;
      toast.error('Contact deleted');
    });
    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(editContact.fulfilled, (state, action) => {
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1, action.payload);
      state.isLoading = false;
      toast.success('Contact updated');
    });
    builder.addCase(editContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(editContact.rejected, (state, action) => {
      state.error = action.payload;

      toast.error(`"${state.error.name}:${state.error.number}" is already in contacts`);
      state.error = null;
      state.isLoading = false;
    });
  },
});
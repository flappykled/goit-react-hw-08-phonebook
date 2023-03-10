import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    change(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;
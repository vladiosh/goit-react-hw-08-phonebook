import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: builder =>
    builder.addCase(logOut.fulfilled, state => (state = '')),
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

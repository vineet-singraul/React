import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'Ajay!',
  },
  reducers: {
    changeName: (state) => {
      state.username = 'Vineet!';
    },
  },
});

export const { changeName } = nameSlice.actions;
export default nameSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Destio Wahyu Lanio coy',
  nim: 'A11.2021.13568',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.nim = action.payload.nim;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

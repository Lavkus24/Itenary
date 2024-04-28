import { createSlice } from '@reduxjs/toolkit';

const initialId = {
   userId: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialId,
  reducers: {
       setUserId : (state , action) => {
           state.userId = action.payload
       }
  },
});

export const { setUserId } = authSlice.actions;

export default authSlice.reducer;

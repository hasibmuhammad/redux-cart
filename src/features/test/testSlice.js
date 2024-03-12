import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isLoading: true,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
});

export default testSlice.reducer;

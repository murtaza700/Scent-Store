import { createSlice } from "@reduxjs/toolkit";

const storedValue = localStorage.getItem('cart');

const initialValue = storedValue ? Number(storedValue) : 0;

const initialState = {
  value: initialValue,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem('cart', state.value);
    }
  }
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
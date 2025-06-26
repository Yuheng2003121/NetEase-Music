import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    setCount: (state, action) => {
      state.count = action.payload
    }
  }
})
export const { increment, decrement, setCount } = counterSlice.actions

export default counterSlice.reducer
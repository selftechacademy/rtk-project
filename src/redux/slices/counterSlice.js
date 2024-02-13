import { createSlice } from "@reduxjs/toolkit";

//[count, setCount] = useState(0);
const initialState = {
  count: 0,
  name: "Geek",
  address: {
    city: "Des Plaines",
    state: "IL",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    multiplyByAmount: (state, action) => {
      state.count *= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiplyByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;

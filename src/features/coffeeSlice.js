import { createSlice } from "@reduxjs/toolkit";

const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    coffeeList: [
      { id: 1, name: "Espresso", price: 2.5 },
      { id: 2, name: "Latte", price: 3.0 },
      // Add more coffee items as needed
    ],
  },
  reducers: {},
});

export const selectCoffeeList = (state) => state.coffee.coffeeList;

export default coffeeSlice.reducer;

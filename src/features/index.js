import { combineReducers } from "@reduxjs/toolkit";
import coffeeReducer from "./coffeeSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  coffee: coffeeReducer,
  cart: cartReducer,
});

export default rootReducer;

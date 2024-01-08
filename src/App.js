import React from "react";
import CoffeeList from "./components/CoffeeList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <h1>Coffee Shop</h1>
      <CoffeeList />
      <Cart />
    </div>
  );
};

export default App;

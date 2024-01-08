import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCoffeeList } from "../features/coffeeSlice";
import { addToCart } from "../features/cartSlice";

const CoffeeList = () => {
  const coffeeList = useSelector(selectCoffeeList);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Coffee Menu</h2>
      <ul>
        {coffeeList.map((coffee) => (
          <li key={coffee.id}>
            {coffee.name} - ${coffee.price}
            <button onClick={() => dispatch(addToCart(coffee))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeList;

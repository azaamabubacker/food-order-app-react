import React, { useContext } from "react";
import classes from "./MealItems.module.css";
import MealItemForm from "../MealItems/MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItems(props) {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItems;

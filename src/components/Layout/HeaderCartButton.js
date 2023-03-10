import React from "react";
import CardIcon from "../Card/CardIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;

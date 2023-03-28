import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>.EatUp</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals pic" />
      </div>
    </Fragment>
  );
}

export default Header;

import { useState } from "react";
import { Fragment } from "react";

import Bookmarks from "./Bookmarks";
import AddRecipe from "./AddRecipe";

import classes from "./Nav.module.css";
import icons from "../../../img/icons.svg";
const Nav = () => {
  const [addRecipe, setAddRecipe] = useState(false);
  const addRecipeHandler = () => {
    setAddRecipe(true);
  };
  const backToRecipeHandler = () => {
    console.log("clicked");
    setAddRecipe(false);
  };

  console.log(addRecipe);

  return (
    <Fragment>
      {addRecipe === true && <AddRecipe onConfirm={backToRecipeHandler} />}
      <nav className={classes.nav}>
        <ul className={classes["nav__list"]}>
          <li onClick={addRecipeHandler} className={classes["nav__item"]}>
            <button className={classes["nav__btn"]}>
              <svg className={classes["nav__icon"]}>
                <use href={`${icons}#icon-edit`}></use>
              </svg>
              <span>Add recipe</span>
            </button>
          </li>
          <li className={classes["nav__item"]}>
            <Bookmarks />
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;

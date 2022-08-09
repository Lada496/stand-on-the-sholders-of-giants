import classes from "./Ingredients.module.css";
import icons from "../../../img/icons.svg";

const Ingredient = (props) => {
  return (
    <li className={classes["recipe__ingredient"]}>
      <svg className={classes["recipe__icon"]}>
        <use href={`${icons}#icon-check`}></use>
      </svg>
      <div className={classes["recipe__description"]}>{props.ingredient}</div>
    </li>
  );
};

export default Ingredient;

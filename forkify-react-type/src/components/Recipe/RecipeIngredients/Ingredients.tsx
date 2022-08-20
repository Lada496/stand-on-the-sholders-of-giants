import classes from "./Ingredients.module.css";
import icons from "../../../img/icons.svg";

type IngredientProps = {
  ingredient: string;
};

const Ingredient = ({ ingredient }: IngredientProps) => {
  return (
    <li className={classes["recipe__ingredient"]}>
      <svg className={classes["recipe__icon"]}>
        <use href={`${icons}#icon-check`}></use>
      </svg>
      <div className={classes["recipe__description"]}>{ingredient}</div>
    </li>
  );
};

export default Ingredient;

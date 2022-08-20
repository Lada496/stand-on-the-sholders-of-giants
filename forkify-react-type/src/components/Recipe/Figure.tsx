import classes from "./Figure.module.css";

import { IRecipe } from "../../store/state-slice";

type FigureProps = {
  recipe: IRecipe;
};

const Figure = ({ recipe }: FigureProps) => {
  return (
    <figure className={classes["recipe__fig"]}>
      <img
        src={recipe.image}
        alt={recipe.title}
        className={classes["recipe__img"]}
      />
      <h1 className={classes["recipe__title"]}>
        <span>{recipe.title}</span>
      </h1>
    </figure>
  );
};

export default Figure;

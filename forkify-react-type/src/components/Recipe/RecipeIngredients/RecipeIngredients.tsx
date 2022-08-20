import classes from "./RecipeIngredients.module.css";
import Ingredient from "./Ingredients";

type RecipeIngredientsProps = {
  ingredients: string[];
};

const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  let count = -1;
  const ingredientComponents = ingredients.map((ingredient) => {
    count++;
    return <Ingredient ingredient={ingredient} key={count} />;
  });

  return (
    <div className={classes["recipe__ingredients"]}>
      <h2 className={classes["heading--2"]}>Recipe ingredients</h2>
      <ul className={classes["recipe__ingredient-list"]}>
        {ingredientComponents}
      </ul>
    </div>
  );
};

export default RecipeIngredients;

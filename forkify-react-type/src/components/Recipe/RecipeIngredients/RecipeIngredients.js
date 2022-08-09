import classes from "./RecipeIngredients.module.css";
import Ingredient from "./Ingredients";

const RecipeIngredients = (props) => {
  let count = -1;
  const ingredients = props.ingredients.map((ingredient) => {
    count++;
    return <Ingredient ingredient={ingredient} key={count} />;
  });

  return (
    <div className={classes["recipe__ingredients"]}>
      <h2 className={classes["heading--2"]}>Recipe ingredients</h2>
      <ul className={classes["recipe__ingredient-list"]}>{ingredients}</ul>
    </div>
  );
};

export default RecipeIngredients;

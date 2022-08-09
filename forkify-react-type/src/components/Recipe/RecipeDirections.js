import classes from "./RecipeDirections.module.css";
import icons from "../../img/icons.svg";

const RecipeDerections = (props) => {
  return (
    <div className={classes["recipe__directions"]}>
      <h2 className={classes["heading--2"]}>How to cook it</h2>
      <p className={classes["recipe__directions-text"]}>
        This recipe was carefully designed and tested by
        <span className={classes["recipe__publisher"]}>
          {props.recipe.publisher}
        </span>
        . Please check out directions at their website.
      </p>
      <a
        className={`${classes["btn--small"]} ${classes["recipe__btn"]}`}
        href={props.recipe.sourceUrl}
        target="_blank"
      >
        <span>Directions</span>
        <svg className={classes["search__icon"]}>
          <use href={`${icons}#icon-arrow-right`}></use>
        </svg>
      </a>
    </div>
  );
};

export default RecipeDerections;

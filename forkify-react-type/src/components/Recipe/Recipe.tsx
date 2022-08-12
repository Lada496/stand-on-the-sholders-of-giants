import { useState, useEffect, Fragment } from "react";
import { selectId } from "../../store/id-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  updateRecipe,
  selectRecipe,
  selectBookmarks,
} from "../../store/state-slice";
import Figure from "./Figure";
import RecipeDetails from "./RecipeDetails";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import RecipeDerections from "./RecipeDirections";

import classes from "./Recipe.module.css";
import ErrorMessage from "../UI/ErrorMessage";
import Message from "../UI/Message";
import Spinner from "../UI/Spinner";

const Recipe = () => {
  const errorMessage = "We could not find that recipe. Please try another one!";
  const message = "Start by searching for a recipe or an ingredient. Have fun!";
  const dispatch = useAppDispatch();
  const id = useAppSelector(selectId);
  const recipe = useAppSelector(selectRecipe);
  const bookmarks = useAppSelector(selectBookmarks);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRecipe = async () => {
      setIsLoading(true);
      if (id.length === 0) {
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_RECIPE_API}get?rId=${id}`
      );
      if (!response.ok) {
        throw new Error("Failed fetch preview");
      }
      const { recipe } = await response.json();
      const isbookmark = bookmarks.some((bookmark) => bookmark.id === id)
        ? true
        : false;
      dispatch(
        updateRecipe({
          id: recipe.recipe_id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients,
          bookmarked: isbookmark,
          ...(recipe.key && { key: recipe.key }),
        })
      );
      setIsLoading(false);
      setIsError(false);
    };
    try {
      loadRecipe();
    } catch (error) {
      setIsError(true);
    }
  }, [id, dispatch, bookmarks]);

  const context = (
    <Fragment>
      <Figure recipe={recipe} />
      <RecipeDetails recipe={recipe} />
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipeDerections recipe={recipe} />
    </Fragment>
  );
  return (
    <div className={classes.recipe}>
      {!recipe.id && <Message message={message} />}
      {isError && <ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      {!isError && !isLoading && recipe.id && context}
    </div>
  );
};

export default Recipe;

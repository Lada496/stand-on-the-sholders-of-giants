import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  toggleBookmark,
  addBookmarks,
  deleteBookmarks,
  selectBookmarks,
} from "../../store/state-slice";
import classes from "./RecipeDetails.module.css";
import icons from "../../img/icons.svg";
import DeleteRecipe from "./DeleteRecipe";

const RecipeDetails = (props) => {
  const [deleteRecipe, setDeleteRecipe] = useState(false);
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(selectBookmarks);
  const postNewBookmark = async (bookmark) => {
    const response = await fetch(`${process.env.REACT_APP_BOOKMARK_API}.json`, {
      method: "POST",
      body: JSON.stringify(bookmark),
      headers: { "Content-Type": "application/json" },
    });
  };
  const deleteBookmark = async (bookmark) => {
    const response = await fetch(
      `${process.env.REACT_APP_BOOKMARK_API}/${bookmark.apiKey}.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
  };
  const toggleBookmarksHandler = async () => {
    dispatch(toggleBookmark());
    // false -> true
    if (props.recipe.bookmarked === false) {
      const bookmark = {
        publisher: props.recipe.publisher,
        image: props.recipe.image,
        title: props.recipe.title,
        id: props.recipe.id,
        ...(props.recipe.key && { key: props.recipe.key }),
      };
      dispatch(addBookmarks(bookmark));
      await postNewBookmark(bookmark);
      // true->false
    } else {
      for (const key in bookmarks) {
        if (bookmarks[key].id === props.recipe.id) {
          dispatch(deleteBookmarks(key));
          await deleteBookmark(bookmarks[key]);
        }
      }
    }
  };

  const recuceServingsHandler = () => {
    // dispatch(updateServings(props.recipe.servings - 1));
  };
  const increaseServingsHandler = () => {
    // dispatch(updateServings(props.recipe.servings + 1));
  };

  const closeDeleteRecipeHandler = () => {
    setDeleteRecipe(false);
  };
  const showDeleteRecipeHandler = () => {
    setDeleteRecipe(true);
  };
  return (
    <Fragment>
      {deleteRecipe === true && (
        <DeleteRecipe onConfirm={closeDeleteRecipeHandler} />
      )}
      <div className={classes["recipe__details"]}>
        <div className={classes["recipe__info"]}>
          <svg className={classes["recipe__info-icon"]}>
            <use href={`${icons}#icon-clock`}></use>
          </svg>
          <span
            className={`${classes["recipe__info-data"]} ${classes["recipe__info-data--minutes"]}`}
          >
            {props.recipe.cookingTime}
          </span>
          <span className={classes["recipe__info-text"]}>minutes</span>
        </div>
        <div className={classes["recipe__info"]}>
          <svg className={classes["recipe__info-icon"]}>
            <use href={`${icons}#icon-users`}></use>
          </svg>
          <span
            className={`${classes["recipe__info-data"]} ${classes["recipe__info-data--people"]}`}
          >
            {props.recipe.servings}
          </span>
          <span className={classes["recipe__info-text"]}>servings</span>

          <div className={classes["recipe__info-buttons"]}>
            <button
              className={`${classes["btn--tiny"]} ${classes["btn--update-servings"]}`}
              onClick={recuceServingsHandler}
            >
              <svg>
                <use href={`${icons}#icon-minus-circle`}></use>
              </svg>
            </button>
            <button
              className={`${classes["btn--tiny"]} ${classes["btn--update-servings"]}`}
              onClick={increaseServingsHandler}
            >
              <svg>
                <use href={`${icons}#icon-plus-circle`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${classes["recipe__user-generated"]} ${
            props.recipe.key === null ? classes.hidden : ""
          }`}
        >
          <svg onClick={showDeleteRecipeHandler}>
            <use href={`${icons}#icon-user`}></use>
          </svg>
        </div>

        <button
          onClick={toggleBookmarksHandler}
          className={`${classes["btn--round"]} ${classes["btn--bookmark"]}`}
        >
          <svg class="">
            <use
              href={`${icons}#icon-bookmark${
                props.recipe.bookmarked ? "-fill" : ""
              }`}
            ></use>
          </svg>
        </button>
      </div>
    </Fragment>
  );
};

export default RecipeDetails;

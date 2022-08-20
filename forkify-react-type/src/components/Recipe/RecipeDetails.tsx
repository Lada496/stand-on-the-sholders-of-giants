import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  toggleBookmark,
  addBookmarks,
  deleteBookmarks,
  selectBookmarks,
  IDetailedRecipe,
  IBookmark,
  IRecipe,
} from "../../store/state-slice";
import classes from "./RecipeDetails.module.css";
import icons from "../../img/icons.svg";
import DeleteRecipe from "./DeleteRecipe";

type RecipeDetailsProps = {
  recipe: IDetailedRecipe;
};

const RecipeDetails = ({ recipe }: RecipeDetailsProps) => {
  const [deleteRecipe, setDeleteRecipe] = useState(false);
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(selectBookmarks);
  const postNewBookmark = async (bookmark: IRecipe): Promise<string> => {
    const response = await fetch(`${process.env.REACT_APP_BOOKMARK_API}.json`, {
      method: "POST",
      body: JSON.stringify(bookmark),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw Error("failed to add this recipe to bookmark");
    }
    const { name } = await response.json();
    return name;
  };
  const deleteBookmark = async (bookmark: IBookmark) => {
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
    //false -> true
    if (recipe.bookmarked === false) {
      const bookmarkToPost = {
        publisher: recipe.publisher,
        image: recipe.image,
        title: recipe.title,
        id: recipe.id,
        ...(recipe.key && { key: recipe.key }),
      };

      const name = await postNewBookmark(bookmarkToPost);
      const bookmark: IBookmark = {
        ...bookmarkToPost,
        apiKey: name,
      };
      dispatch(addBookmarks(bookmark));
      // true->false
    } else {
      for (const key in bookmarks) {
        if (bookmarks[key].id === recipe.id) {
          dispatch(deleteBookmarks(+key));
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
            {recipe.cookingTime}
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
            {recipe.servings}
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
            recipe.key === null ? classes.hidden : ""
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
          <svg className="">
            <use
              href={`${icons}#icon-bookmark${recipe.bookmarked ? "-fill" : ""}`}
            ></use>
          </svg>
        </button>
      </div>
    </Fragment>
  );
};

export default RecipeDetails;

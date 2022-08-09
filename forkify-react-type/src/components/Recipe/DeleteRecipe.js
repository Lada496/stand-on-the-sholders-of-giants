import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectState } from "../../store/state-slice";
import ReactDOM from "react-dom";
import classes from "./DeleteRecipe.module.css";
import icons from "../../img/icons.svg";

const Backdrop = (props) => {
  return <div onClick={props.onConfirm} className={classes.overlay}></div>;
};

const DeleteRecipeConfirm = (props) => {
  const state = useSelector(selectState);
  const deleteBookmark = async (bookmark) => {
    const response = await fetch(
      `${process.env.REACT_APP_BOOKMARK_API}/${bookmark.apiKey}.json`,
      {
        method: "DELETE",
      }
    );
  };
  const deleteRecipe = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_RECIPE_API}${id}`, {
      method: "DELETE",
    });
  };
  const deleteRecipeHandler = () => {
    console.log(state.recipe.id);
    // deleteRecipe(state.recipe.id);
    if (state.recipe.bookmarked) {
      const bookmark = state.bookmarks.filter(
        (bookmark) => bookmark.id === state.recipe.id
      );

      console.log("bookmark");
      console.log(bookmark[0].apiKey);
    }
    // deleteBookmark(bookmark[0].apiKey);
    props.onConfirm();
  };
  return (
    <div className={classes["add-recipe-window"]}>
      <button onClick={props.onConfirm} className={classes["btn--close-modal"]}>
        &times;
      </button>
      <h3 className={classes["upload__heading"]}>
        Are you sure to delete this recipe?
      </h3>
      <button
        onClick={deleteRecipeHandler}
        className={`${classes.btn} ${classes["upload__btn"]}`}
      >
        <svg>
          <use href={`${icons}#icon-upload-cloud`}></use>
        </svg>
        <span>Delete</span>
      </button>
    </div>
  );
};

const DeleteRecipe = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <DeleteRecipeConfirm onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default DeleteRecipe;

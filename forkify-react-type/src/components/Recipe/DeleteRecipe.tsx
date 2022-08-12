import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectState, IBookmark } from "../../store/state-slice";
import ReactDOM from "react-dom";
import classes from "./DeleteRecipe.module.css";
import icons from "../../img/icons.svg";

type DeleteRecipeProps = {
  onConfirm: () => void;
};

const Backdrop = ({ onConfirm }: DeleteRecipeProps) => {
  return <div onClick={onConfirm} className={classes.overlay}></div>;
};

const DeleteRecipeConfirm = ({ onConfirm }: DeleteRecipeProps) => {
  const state = useSelector(selectState);
  const deleteBookmark = async (bookmark: IBookmark) => {
    const response = await fetch(
      `${process.env.REACT_APP_BOOKMARK_API}/${bookmark.apiKey}.json`,
      {
        method: "DELETE",
      }
    );
  };
  const deleteRecipe = async (id: string) => {
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
    onConfirm();
  };
  return (
    <div className={classes["add-recipe-window"]}>
      <button onClick={onConfirm} className={classes["btn--close-modal"]}>
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

const DeleteRecipe = ({ onConfirm }: DeleteRecipeProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <DeleteRecipeConfirm onConfirm={onConfirm} />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </Fragment>
  );
};

export default DeleteRecipe;

import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectBookmarks } from "../../../store/state-slice";

import Preview from "../../SearchResults/Preview";
import ErrorMessage from "../../UI/ErrorMessage";

import classes from "./Bookmarks.module.css";
import icons from "../../../img/icons.svg";

const Bookmarks = () => {
  const errorMessage = "No bookmark yet. Find a nice recipe and bookmark it :)";
  const bookmarks = useSelector(selectBookmarks);
  const preview = bookmarks.map((result) => {
    return <Preview result={result} key={result.id} />;
  });
  const context = <ul className={classes["bookmarks__list"]}>{preview}</ul>;

  return (
    <Fragment>
      <button
        className={`${classes["nav__btn"]} ${classes["nav__btn--bookmarks"]}`}
      >
        <svg className={classes["nav__icon"]}>
          <use href={`${icons}#icon-bookmark`}></use>
        </svg>
        <span>Bookmarks</span>
      </button>
      <div className={classes.bookmarks}>
        {bookmarks.length === 0 && <ErrorMessage message={errorMessage} />}
        {bookmarks.length >= 1 && context}
      </div>
    </Fragment>
  );
};

export default Bookmarks;

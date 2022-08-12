import { Fragment } from "react";
import classes from "./Pagination.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  increaseSearchPage,
  decreaseSearchPage,
  selectState,
} from "../../store/state-slice";
import icons from "../../img/icons.svg";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectState);
  const curPage = state.search.page;
  const numPage = Math.ceil(
    state.search.results.length / state.search.resultsPerPage
  );
  const moveForwardHandler = () => {
    dispatch(increaseSearchPage());
  };
  const moveBackwardHandler = () => {
    dispatch(decreaseSearchPage());
  };
  const page1AndHaveOtherPages = (
    <button
      onClick={moveForwardHandler}
      className={`${classes["btn--inline"]} ${classes["pagination__btn--next"]}`}
    >
      <span>Page {curPage + 1}</span>
      <svg className={classes["search__icon"]}>
        <use href={`${icons}#icon-arrow-right`}></use>
      </svg>
    </button>
  );

  const lastPage = (
    <button
      onClick={moveBackwardHandler}
      className={`${classes["btn--inline"]} ${classes["pagination__btn--prev"]}`}
    >
      <span>Page {curPage - 1}</span>
      <svg className={classes["search__icon"]}>
        <use href={`${icons}#icon-arrow-left`}></use>
      </svg>
    </button>
  );

  const otherPage = (
    <Fragment>
      <button
        onClick={moveBackwardHandler}
        className={`${classes["btn--inline"]} ${classes["pagination__btn--prev"]}`}
      >
        <span>Page {curPage - 1}</span>
        <svg className={classes["search__icon"]}>
          <use href={`${icons}#icon-arrow-left`}></use>
        </svg>
      </button>
      <button
        onClick={moveForwardHandler}
        className={`${classes["btn--inline"]} ${classes["pagination__btn--next"]}`}
      >
        <span>Page {curPage + 1}</span>
        <svg className={classes["search__icon"]}>
          <use href={`${icons}#icon-arrow-right`}></use>
        </svg>
      </button>
    </Fragment>
  );

  return (
    <div className={classes.pagination}>
      {curPage === 1 && numPage > 1 && page1AndHaveOtherPages}
      {curPage === numPage && numPage > 1 && lastPage}
      {curPage !== 1 && curPage < numPage && otherPage}
    </div>
  );
};

export default Pagination;

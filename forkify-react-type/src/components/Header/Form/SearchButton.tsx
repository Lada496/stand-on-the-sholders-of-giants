import classes from "./SearchButton.module.css";
import icons from "../../../img/icons.svg";

const SearchButton = () => {
  return (
    <button className={`${classes.btn} ${classes["search__btn"]}`}>
      <svg className={classes["search__icon"]}>
        <use href={`${icons}#icon-search`}></use>
      </svg>
      <span>Search</span>
    </button>
  );
};

export default SearchButton;

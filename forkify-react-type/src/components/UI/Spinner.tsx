import icons from "../../img/icons.svg";
import classes from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <svg>
        <use href={`${icons}#icon-loader`}></use>
      </svg>
    </div>
  );
};

export default Spinner;

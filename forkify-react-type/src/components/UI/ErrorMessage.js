import classes from "./ErrorMessage.module.css";
import icons from "../../img/icons.svg";

const ErrorMessage = (props) => {
  return (
    <div className={classes.error}>
      <div>
        <svg>
          <use href={`${icons}#icon-alert-triangle`}></use>
        </svg>
      </div>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMessage;

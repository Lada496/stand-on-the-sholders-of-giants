import classes from "./ErrorMessage.module.css";
import icons from "../../img/icons.svg";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={classes.error}>
      <div>
        <svg>
          <use href={`${icons}#icon-alert-triangle`}></use>
        </svg>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;

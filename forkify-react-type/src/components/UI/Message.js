import classes from "./ErrorMessage.module.css";
import icons from "../../img/icons.svg";
const Message = (props) => {
  return (
    <div className={classes.message}>
      <div>
        <svg>
          <use href={`${icons}#icon-smile`}></use>
        </svg>
      </div>
      <p>{props.message}</p>
    </div>
  );
};

export default Message;

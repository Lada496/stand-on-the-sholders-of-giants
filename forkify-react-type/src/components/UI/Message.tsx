import classes from "./ErrorMessage.module.css";
import icons from "../../img/icons.svg";

type MessageProps = {
  message: string;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className={classes.message}>
      <div>
        <svg>
          <use href={`${icons}#icon-smile`}></use>
        </svg>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Message;

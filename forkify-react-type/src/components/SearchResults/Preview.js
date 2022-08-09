import classes from "./Preview.module.css";
import icons from "../../img/icons.svg";
import { useSelector, useDispatch } from "react-redux";
import { updateId } from "../../store/id-slice";

const Preview = (props) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id.id);
  const updateIdHandler = () => {
    dispatch(updateId(props.result.id));
  };
  return (
    <li onClick={updateIdHandler} className={classes.preview}>
      <a
        className={`${classes["preview__link"]} ${
          props.result.id === id ? classes["preview__link-active"] : ""
        }`}
        href={`#${props.id}`}
      >
        <figure className={classes["preview__fig"]}>
          <img src={`${props.result.image}`} alt={props.result.title} />
        </figure>
        <div className={classes["preview__data"]}>
          <h4 className={classes["preview__title"]}>{props.result.title}</h4>
          <p className={classes["preview__publisher"]}>
            {props.result.publisher}
          </p>
          <div
            className={`${classes["preview__user-generated"]} ${
              props.result.key ? "" : classes.hidden
            }`}
          >
            <svg>
              <use href={`${icons}#icon-user`}></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
};

export default Preview;

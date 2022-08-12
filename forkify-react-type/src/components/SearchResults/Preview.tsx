import classes from "./Preview.module.css";
import icons from "../../img/icons.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IRecipe } from "../../store/state-slice";
import { updateId, selectId } from "../../store/id-slice";

type PreviewProps = {
  result: IRecipe;
};

const Preview = ({ result }: PreviewProps) => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(selectId);
  const updateIdHandler = () => {
    dispatch(updateId(result.id));
  };
  return (
    <li onClick={updateIdHandler} className={classes.preview}>
      <a
        className={`${classes["preview__link"]} ${
          result.id === id ? classes["preview__link-active"] : ""
        }`}
        href={`#${id}`}
      >
        <figure className={classes["preview__fig"]}>
          <img src={`${result.image}`} alt={result.title} />
        </figure>
        <div className={classes["preview__data"]}>
          <h4 className={classes["preview__title"]}>{result.title}</h4>
          <p className={classes["preview__publisher"]}>{result.publisher}</p>
          <div
            className={`${classes["preview__user-generated"]} ${
              result.key ? "" : classes.hidden
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

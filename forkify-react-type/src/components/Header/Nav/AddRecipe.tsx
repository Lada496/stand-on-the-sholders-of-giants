import { Fragment } from "react";
import AddRecipeForm from "./AddRecipeForm";
import ReactDOM from "react-dom";
import classes from "./AddRecipe.module.css";

type AddRecipeProps = {
  onConfirm: () => void;
};

type BackdropProps = AddRecipeProps;

const Backdrop = ({ onConfirm }: BackdropProps) => {
  return <div onClick={onConfirm} className={classes.overlay}></div>;
};

const AddRecipe = ({ onConfirm }: AddRecipeProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <AddRecipeForm onConfirm={onConfirm} />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </Fragment>
  );
};

export default AddRecipe;

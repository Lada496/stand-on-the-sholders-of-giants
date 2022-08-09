import { Fragment } from "react";
import AddRecipeForm from "./AddRecipeForm";
import ReactDOM from "react-dom";
import classes from "./AddRecipe.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onConfirm} className={classes.overlay}></div>;
};

const AddRecipe = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AddRecipeForm onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default AddRecipe;

import { useState, Fragment } from "react";
import icons from "../../../img/icons.svg";
import { useAppDispatch } from "../../../store/hooks";
import { addBookmarks } from "../../../store/state-slice";
import Message from "../../UI/Message";
import Spinner from "../../UI/Spinner";
import ErrorMessage from "../../UI/ErrorMessage";
import classes from "./AddRecipeForm.module.css";

const AddRecipeForm = (props) => {
  const message = "Recipe was successfully uploaded :)";
  const errorM = "Sending recipe faild... try again!";
  const [sendingRecipe, setSendingRecipe] = useState(false);
  const [sentRecipe, setSentRecipe] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("TEST");
  const [url, setUrl] = useState("TEST");
  const [image, setImage] = useState("TEST");
  const [publisher, setPublisher] = useState("TEST");
  const [cookingTime, setCookinTime] = useState("23");
  const [servings, setServings] = useState("23");
  const [ingredient1, setIngredient1] = useState("0.5,kg,Rice");
  const [ingredient2, setIngredient2] = useState("1,,Avocado");
  const [ingredient3, setIngredient3] = useState(",,salt");
  const [ingredient4, setIngredient4] = useState(null);
  const [ingredient5, setIngredient5] = useState(null);
  const [ingredient6, setIngredient6] = useState(null);
  const [ingredients, setIngredients] = useState([
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
  ]);

  const dispatch = useAppDispatch();

  const sentMessage = (
    <div className={classes["add-recipe-window"]}>
      <Message message={message} />
    </div>
  );

  const sendingSpinner = (
    <div className={classes["add-recipe-window"]}>
      <Spinner />
    </div>
  );

  const errorMessage = (
    <div className={classes["add-recipe-window"]}>
      <ErrorMessage message={errorM} />
    </div>
  );

  const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

  const uploadRecipe = async (recipe) => {
    const fetchData = fetch(`${process.env.REACT_APP_RECIPE_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    const response = await Promise.race([
      fetchData,
      timeout(process.env.REACT_APP_TIMEOUT_SEC),
    ]);
    if (!response.ok) {
      throw new Error("Failed uploading recipe");
    }
    const data = await response.json();
    console.log(data);
    const bookmark = {
      publisher: data.data.recipe.publisher,
      image: data.data.recipe.image_url,
      title: data.data.recipe.title,
      id: data.data.recipe.id,
      ...(data.data.recipe.key && { key: data.data.recipe.key }),
    };
    dispatch(addBookmarks(bookmark));
    postNewBookmark(bookmark);
  };

  const postNewBookmark = async (bookmark) => {
    const response = await fetch(`${process.env.REACT_APP_BOOKMARK_API}.json`, {
      method: "POST",
      body: JSON.stringify(bookmark),
      headers: { "Content-Type": "application/json" },
    });
  };

  const closeOperation = () => {
    setTimeout(props.onConfirm(), 5000);
    // setSentRecipe(false);
  };

  const addRecipeHandler = async (event) => {
    event.preventDefault();
    setSendingRecipe(true);
    let newIngredients = [];
    for (const key in ingredients) {
      if (ingredients[key]) {
        const ingArr = ingredients[key].split(",").map((el) => el.trim());
        if (ingArr.length !== 3) {
          throw new Error(
            "Wrong ingredient format! Please use the correct format :)"
          );
        }
        const [quantity, unit, description] = ingArr;
        newIngredients.push({
          quantity: quantity ? +quantity : null,
          unit,
          description,
        });
      }
    }
    console.log(newIngredients);
    const recipe = {
      title: title,
      source_url: url,
      image_url: image,
      publisher: publisher,
      cooking_time: +cookingTime,
      servings: +servings,
      ingredients: newIngredients,
    };
    console.log(recipe);
    try {
      await uploadRecipe(recipe);
      setSendingRecipe(false);
      setSentRecipe(true);
    } catch (error) {
      console.log(error);
      setError(true);
      setSendingRecipe(false);
    }
    //closeOperation();
  };
  const recipeForm = (
    <div className={classes["add-recipe-window"]}>
      <button onClick={props.onConfirm} className={classes["btn--close-modal"]}>
        &times;
      </button>
      <form onSubmit={addRecipeHandler} className={classes.upload}>
        <div className={classes["upload__column"]}>
          <h3 className={classes["upload__heading"]}>Recipe data</h3>
          <label>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            name="title"
            type="text"
            placeholder="Title"
          />
          <label>URL</label>
          <input
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            required
            name="sourceUrl"
            type="text"
            placeholder="Source URL"
          />
          <label>Image URL</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
            name="image"
            type="text"
            placeholder="Image URL"
          />
          <label>Publisher</label>
          <input
            onChange={(e) => setPublisher(e.target.value)}
            value={publisher}
            required
            name="publisher"
            type="text"
            placeholder="Publusher"
          />
          <label>Prep time</label>
          <input
            onChange={(e) => setCookinTime(e.target.value)}
            value={cookingTime}
            required
            name="cookingTime"
            type="number"
            placeholder="Prep time (e.g: 23)"
          />
          <label>Servings</label>
          <input
            onChange={(e) => setServings(e.target.value)}
            value={servings}
            required
            name="servings"
            type="number"
            placeholder="Servings (e.g: 23)"
          />
        </div>

        <div className={classes["upload__column"]}>
          <h3 className={classes["upload__heading"]}>Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            onChange={(e) => setIngredient1(e.target.value)}
            value={ingredient1}
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            onChange={(e) => setIngredient2(e.target.value)}
            value={ingredient2}
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            onChange={(e) => setIngredient3(e.target.value)}
            value={ingredient3}
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            onChange={(e) => setIngredient4(e.target.value)}
            value={ingredient4}
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            onChange={(e) => setIngredient5(e.target.value)}
            value={ingredient5}
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            onChange={(e) => setIngredient6(e.target.value)}
            value={ingredient6}
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button className={`${classes.btn} ${classes["upload__btn"]}`}>
          <svg>
            <use href={`${icons}#icon-upload-cloud`}></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>
  );

  return (
    <Fragment>
      {error && errorMessage}
      {sendingRecipe && sendingSpinner}
      {sentRecipe && sentMessage}
      {!sentRecipe && !sendingRecipe && !error && recipeForm}
    </Fragment>
  );
};

export default AddRecipeForm;

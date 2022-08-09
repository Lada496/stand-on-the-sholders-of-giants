import { useRef } from "react";
import { updateSearchQuery } from "../../../store/state-slice";
import { useDispatch } from "react-redux";
import SearchButton from "./SearchButton";

import classes from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const updateSearchQueryHandler = () => {
    dispatch(updateSearchQuery(inputRef.current.value));
  };

  return (
    <form onSubmit={updateSearchQueryHandler} className={classes.search}>
      <input
        ref={inputRef}
        type="text"
        className={classes["search__field"]}
        placeholder="Search over 1,000,000 recipes..."
      />
      <SearchButton />
    </form>
  );
};

export default Form;

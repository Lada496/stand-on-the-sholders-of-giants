import { useRef, SyntheticEvent } from "react";
import { updateSearchQuery } from "../../../store/state-slice";
import { useAppDispatch } from "../../../store/hooks";
import SearchButton from "./SearchButton";

import classes from "./Form.module.css";

const Form = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const updateSearchQueryHandler = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(updateSearchQuery(inputRef.current.value));
    }
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

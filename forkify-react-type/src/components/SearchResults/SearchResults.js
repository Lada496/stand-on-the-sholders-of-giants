import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Preview from "./Preview";
import Copyright from "./Copyright";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchResults } from "../../store/state-slice";

import classes from "./SearchResults.module.css";
import ErrorMessage from "../UI/ErrorMessage";
import Spinner from "../UI/Spinner";
const SearchResults = () => {
  const query = useSelector((state) => state.state.search.query);
  const results = useSelector((state) => state.state.search.results);
  const page = useSelector((state) => state.state.search.page);
  const errorMessage = "No recipes found for your query! . Please try again;";
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const resultsPerPage = useSelector(
    (state) => state.state.search.resultsPerPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const sendSearchHandler = async () => {
      setIsLoading(true);
      if (query.length === 0) {
        setIsLoading(false);
        return;
      }
      const response = await fetch(
        `${process.env.REACT_APP_RECIPE_API}search?q=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed fetch preview");
      }
      const { recipes } = await response.json();
      let results = [];
      for (const recipe of recipes) {
        results.push({
          publisher: recipe.publisher,
          image: recipe.image_url,
          title: recipe.title,
          id: recipe.recipe_id,
          ...(recipe.key && { key: recipe.key }),
        });
      }
      dispatch(updateSearchResults(results));
      setIsLoading(false);
      setIsError(false);
    };
    try {
      sendSearchHandler();
    } catch (error) {
      setIsError(true);
    }
  }, [query, dispatch]);

  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;

  const preview = results.slice(start, end).map((result) => {
    return <Preview result={result} key={result.id} />;
  });

  return (
    <div className={classes["search-results"]}>
      {isError && <ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      {!isError && !isLoading && <ul className={classes.results}>{preview}</ul>}
      <Pagination />
      <Copyright />
    </div>
  );
};

export default SearchResults;

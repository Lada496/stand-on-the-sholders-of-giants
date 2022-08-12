import { Fragment } from "react";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import Recipe from "./components/Recipe/Recipe";
import { useAppDispatch } from "./store/hooks";
import { addBookmarks, IBookmark } from "./store/state-slice";

import classes from "./App.module.css";

function App() {
  const dispatch = useAppDispatch();
  const loadBookmarks = async () => {
    const response = await fetch(`${process.env.REACT_APP_BOOKMARK_API}.json`);
    if (!response.ok) {
      throw new Error("Failed fetch bookmarks");
    }
    const data = await response.json();
    let results: IBookmark[] = [];
    for (const key in data) {
      results.push({
        apiKey: key,
        id: data[key].id,
        title: data[key].title,
        publisher: data[key].publisher,
        image: data[key].image,
        ...(data[key].key && { key: data[key].key }),
      });
    }
    for (const result of results) {
      dispatch(addBookmarks(result));
    }
  };
  loadBookmarks();
  return (
    <Fragment>
      <div className={classes.container}>
        <Header />
        <SearchResults />
        <Recipe />
      </div>
    </Fragment>
  );
}

export default App;

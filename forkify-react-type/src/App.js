import { Fragment } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import Recipe from "./components/Recipe/Recipe";
import { addBookmarks } from "./store/state-slice";

import classes from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const loadBookmarks = async () => {
    const response = await fetch(`${process.env.REACT_APP_BOOKMARK_API}.json`);
    if (!response.ok) {
      throw new Error("Failed fetch bookmarks");
    }
    const data = await response.json();
    let results = [];
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
    results.map((result) => {
      dispatch(addBookmarks(result));
    });
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

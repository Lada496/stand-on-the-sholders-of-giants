import { createSlice } from "@reduxjs/toolkit";
import { RES_PER_PAGE } from "../config";

const initialRecipe = {
  id: "",
  title: "",
  publisher: "",
  sourceUrl: "",
  image: "",
  servings: "",
  cookingTime: "",
  ingredients: [],
  bookmarked: false,
  key: null,
};

const stateSlice = createSlice({
  name: "state",
  initialState: {
    recipe: initialRecipe,
    search: {
      query: "",
      results: [],
      page: 1,
      resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [],
  },
  reducers: {
    updateRecipe(state, action) {
      state.recipe.id = action.payload.id;
      state.recipe.title = action.payload.title;
      state.recipe.publisher = action.payload.publisher;
      state.recipe.sourceUrl = action.payload.sourceUrl;
      state.recipe.image = action.payload.image;
      state.recipe.servings = action.payload.servings;
      state.recipe.cookingTime = action.payload.cookingTime;
      state.recipe.ingredients = action.payload.ingredients;
      state.recipe.bookmarked = action.payload.bookmarked;
      state.recipe.key = action.payload.key
        ? action.payload.key
        : state.recipe.key;
    },
    toggleBookmark(state) {
      state.recipe.bookmarked = !state.recipe.bookmarked;
    },
    updateSearchQuery(state, action) {
      state.search.query = action.payload;
    },

    updateSearchResults(state, action) {
      state.search.results.splice(0, state.search.results.length);
      for (const result of action.payload) {
        state.search.results.push(result);
      }
    },
    increaseSearchPage(state) {
      state.search.page++;
    },
    decreaseSearchPage(state) {
      state.search.page--;
    },
    addBookmarks(state, action) {
      state.bookmarks.push(action.payload);
    },
    deleteBookmarks(state, action) {
      state.bookmarks.splice(action.payload, 1);
    },

    updateServings(state, action) {
      state.recipe.ingredients.forEach((ing) => {
        ing.quantity = (ing.quantity * action.payload) / state.recipe.servings;
        // newQt = oldQt*newServings / oldServings // 2 * 8 / 4 = 4
      });
      state.recipe.servings = action.payload;
    },
  },
});

export const {
  updateRecipe,
  toggleBookmark,
  updateSearchQuery,
  updateSearchResults,
  increaseSearchPage,
  decreaseSearchPage,
  addBookmarks,
  deleteBookmarks,
  updateServings,
} = stateSlice.actions;

export default stateSlice;

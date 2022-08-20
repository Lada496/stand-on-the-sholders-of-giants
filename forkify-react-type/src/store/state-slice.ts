import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface IRecipe {
  id: string;
  title: string;
  publisher: string;
  image: string;
  key?: string;
}

export interface IDetailedRecipe extends IRecipe {
  sourceUrl: string;
  servings: string;
  cookingTime: string;
  ingredients: string[];
  bookmarked: boolean;
}

export interface IBookmark extends IRecipe {
  apiKey: string;
}

interface ISearch {
  query: string;
  results: IRecipe[];
  page: number;
  resultsPerPage: number;
}

interface IState {
  recipe: IDetailedRecipe;
  search: ISearch;
  bookmarks: IBookmark[];
}

const initialRecipe: IDetailedRecipe = {
  id: "",
  title: "",
  publisher: "",
  sourceUrl: "",
  image: "",
  servings: "",
  cookingTime: "",
  ingredients: [],
  bookmarked: false,
  key: "",
};

const initialSearch: ISearch = {
  query: "",
  results: [],
  page: 1,
  resultsPerPage: process.env.REACT_APP_RES_PER_PAGE,
};

const initialState: IState = {
  recipe: initialRecipe,
  search: initialSearch,
  bookmarks: [],
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    updateRecipe(state, action: PayloadAction<IDetailedRecipe>) {
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
    updateSearchQuery(state, action: PayloadAction<string>) {
      state.search.query = action.payload;
    },

    updateSearchResults(state, action: PayloadAction<IDetailedRecipe[]>) {
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
    addBookmarks(state, action: PayloadAction<IBookmark>) {
      state.bookmarks.push(action.payload);
    },
    deleteBookmarks(state, action: PayloadAction<number>) {
      state.bookmarks.splice(action.payload, 1);
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
} = stateSlice.actions;

export const selectState = (state: RootState) => state.state;
export const selectRecipe = (state: RootState) => state.state.recipe;
export const selectQuery = (state: RootState) => state.state.search.query;
export const selectResults = (state: RootState) => state.state.search.results;
export const selectPage = (state: RootState) => state.state.search.page;
export const selectResultsPerPage = (state: RootState) =>
  state.state.search.resultsPerPage;
export const selectBookmarks = (state: RootState) => state.state.bookmarks;

export default stateSlice;

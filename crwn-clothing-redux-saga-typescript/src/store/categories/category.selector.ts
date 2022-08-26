import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoryMap } from "./category.types";
import { CategoiresState } from "./category.reducer";

const selectCategoryReducer = (state: RootState): CategoiresState =>
  state.categories;
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

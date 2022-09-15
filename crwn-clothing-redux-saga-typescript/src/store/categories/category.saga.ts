import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

// the difference b/w yeild and yeild* is that yeild typically yeilds the generator and you are still inside of JavaScript generator land that handles the actual excecution of those generator functions
// yeild* is similar but it essentially hands it off to the redux-saga library so redux-saga is going to behave the same way except because its redux-saga, redux-saga can cordinate and identify what these effects are what their return values going to be because if you remember with the saga, a saga can have multiple yeild steps typically with the generator it's very difficult to determine what the outout of these generators are because each yeild is a output the next call in the generator
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error as Error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

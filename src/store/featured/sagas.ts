import { all, fork, put, takeEvery } from "redux-saga/effects";
import { FeaturedActionTypes } from "./types";
import { fetchCollection } from "../../lib/repo/featured";
import { fetchError, fetchSuccess } from "./actions";
import { Product } from "../../lib/types";

function* handleFetch() {
  try {
    const products: Product[] = yield fetchCollection();
    yield put(fetchSuccess(products));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError("Error in fetching carousel"));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(FeaturedActionTypes.FETCH_REQUEST, handleFetch);
}

function* featuredSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default featuredSaga;

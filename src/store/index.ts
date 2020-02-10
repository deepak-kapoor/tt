import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { CarouselState } from "./carousel/types";
import carouselReducer from "./carousel/reducer";
import carouselSaga from "./carousel/sagas";
import { FeaturedState } from "./featured/types";
import featuredReducer from "./featured/reducer";
import featuredSaga from "./featured/sagas";

export interface ApplicationState {
  carousel: CarouselState;
  featured: FeaturedState;
}

export const createRootReducer = () =>
  combineReducers({
    carousel: carouselReducer,
    featured: featuredReducer
  });

export function* rootSaga() {
  yield all([fork(carouselSaga), fork(featuredSaga)]);
}

import { createReducer } from "typesafe-actions";
import { FeaturedState, FeaturedActionTypes } from "./types";
import { fetchRequest, fetchSuccess, fetchError } from "./actions";

export const initialState: FeaturedState = {
  data: [],
  errors: undefined,
  loading: false
};

type ActionType =
  | ReturnType<typeof fetchRequest>
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchError>;

export default createReducer<FeaturedState, ActionType>(initialState)
  .handleType(FeaturedActionTypes.FETCH_REQUEST, state => {
    return { ...state, loading: true };
  })
  .handleType(FeaturedActionTypes.FETCH_SUCCESS, (state, action) => {
    return { ...state, loading: false, data: action.payload };
  })
  .handleType(FeaturedActionTypes.FETCH_ERROR, (state, action) => {
    return { ...state, loading: false, errors: action.payload };
  });

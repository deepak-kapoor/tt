import { createReducer } from "typesafe-actions";
import { CarouselState, CarouselActionTypes } from "./types";
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  goPrevious,
  goNext
} from "./actions";

export const initialState: CarouselState = {
  data: [],
  errors: undefined,
  loading: false
};

type ActionType =
  | ReturnType<typeof fetchRequest>
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchError>
  | ReturnType<typeof goPrevious>
  | ReturnType<typeof goNext>;

export default createReducer<CarouselState, ActionType>(initialState)
  .handleType(CarouselActionTypes.FETCH_REQUEST, state => {
    return { ...state, loading: true };
  })
  .handleType(CarouselActionTypes.FETCH_SUCCESS, (state, action) => {
    return { ...state, loading: false, data: action.payload };
  })
  .handleType(CarouselActionTypes.FETCH_ERROR, (state, action) => {
    return { ...state, loading: false, errors: action.payload };
  })
  .handleType(CarouselActionTypes.GO_PREVIOUS, state => {
    const copyOfData = [...state.data];
    let last = copyOfData.slice(-1);
    let rest = copyOfData.slice(0, -1);
    return { ...state, loading: false, data: [...last, ...rest] };
  })
  .handleType(CarouselActionTypes.GO_NEXT, state => {
    const copyOfData = [...state.data];
    let [first, ...rest] = copyOfData;
    return { ...state, loading: false, data: [...rest, first] };
  });

import { action } from "typesafe-actions";
import { Product } from "../../lib/types";
import { CarouselActionTypes } from "./types";

export const fetchRequest = () => action(CarouselActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Product[]) =>
  action(CarouselActionTypes.FETCH_SUCCESS, data);

export const fetchError = (error: string) =>
  action(CarouselActionTypes.FETCH_ERROR, error);

export const goPrevious = () => action(CarouselActionTypes.GO_PREVIOUS);

export const goNext = () => action(CarouselActionTypes.GO_NEXT);

import { action } from "typesafe-actions";
import { Product } from "../../lib/types";
import { FeaturedActionTypes } from "./types";

export const fetchRequest = () => action(FeaturedActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Product[]) =>
  action(FeaturedActionTypes.FETCH_SUCCESS, data);

export const fetchError = (error: string) =>
  action(FeaturedActionTypes.FETCH_ERROR, error);

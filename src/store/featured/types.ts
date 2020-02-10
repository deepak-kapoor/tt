import { Product } from "../../lib/types";

export enum FeaturedActionTypes {
  FETCH_REQUEST = "@@featured/FETCH_REQUEST",
  FETCH_SUCCESS = "@@featured/FETCH_SUCCESS",
  FETCH_ERROR = "@@featured/FETCH_ERROR"
}

export interface FeaturedState {
  readonly loading: boolean;
  readonly data: Product[];
  readonly errors?: string;
}

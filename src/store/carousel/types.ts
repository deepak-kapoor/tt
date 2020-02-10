import { Product } from "../../lib/types";

export enum CarouselActionTypes {
  FETCH_REQUEST = "@@carousel/FETCH_REQUEST",
  FETCH_SUCCESS = "@@carousel/FETCH_SUCCESS",
  FETCH_ERROR = "@@carousel/FETCH_ERROR",
  GO_PREVIOUS = "@@carousel/GO_PREVIOUS",
  GO_NEXT = "@@carousel/GO_NEXT"
}

export interface CarouselState {
  readonly loading: boolean;
  readonly data: Product[];
  readonly errors?: string;
}

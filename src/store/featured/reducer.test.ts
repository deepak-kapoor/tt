import reducer from "./reducer";
import { FeaturedActionTypes } from "./types";

const initialState = {
  data: [],
  errors: undefined,
  loading: false
};

describe("Featured Reducer", () => {
  it("should handle FETCH_REQUEST", () => {
    const actualState = reducer(initialState, {
      type: FeaturedActionTypes.FETCH_REQUEST
    });
    const expectedState = { data: [], errors: undefined, loading: true };
    expect(actualState).toEqual(expectedState);
  });

  it("should handle FETCH_SUCCESS", () => {
    const actualState = reducer(initialState, {
      type: FeaturedActionTypes.FETCH_SUCCESS,
      payload: [{ img: "blah", title: "blah", location: "blah" }]
    });
    const expectedState = {
      data: [{ img: "blah", title: "blah", location: "blah" }],
      errors: undefined,
      loading: false
    };
    expect(actualState).toEqual(expectedState);
  });

  it("should handle FETCH_ERROR", () => {
    const actualState = reducer(initialState, {
      type: FeaturedActionTypes.FETCH_ERROR,
      payload: "error"
    });
    const expectedState = { data: [], errors: "error", loading: false };
    expect(actualState).toEqual(expectedState);
  });
});

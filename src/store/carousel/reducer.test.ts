import reducer from "./reducer";
import { CarouselActionTypes } from "./types";

const products = [
  {
    title: "Kakadu National Park",
    img: "https://placeimg.com/240/240/nature",
    location: "Jabiru NT"
  },
  {
    title: "Uluru-Kata Tjuta National Park",
    img: "https://placeimg.com/640/480/nature",
    location: "Uluru NT"
  },
  {
    title: "Royal National Park",
    img: "https://placeimg.com/400/100/nature",
    location: "Royal National Park NSW"
  },
  {
    title: "Kosciuszko National Park",
    img: "https://placeimg.com/240/600/nature",
    location: "NSW"
  },
  {
    title: "Purnululu National Park",
    img: "https://placeimg.com/1200/400/nature",
    location: "Western Australia"
  },
  {
    title: "Wilsons Promontory National Park",
    img: "https://placeimg.com/320/320/nature",
    location: "Wilsons Promontory VIC"
  },
  {
    title: "Booderee National Park",
    img: "https://placeimg.com/640/480/nature",
    location: "Jervis Bay JBT"
  }
];

const initialState = {
  data: [],
  errors: undefined,
  loading: false
};

describe("Featured Reducer", () => {
  it("should handle FETCH_REQUEST", () => {
    const actualState = reducer(initialState, {
      type: CarouselActionTypes.FETCH_REQUEST
    });
    const expectedState = { data: [], errors: undefined, loading: true };
    expect(actualState).toEqual(expectedState);
  });

  it("should handle FETCH_SUCCESS", () => {
    const actualState = reducer(initialState, {
      type: CarouselActionTypes.FETCH_SUCCESS,
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
      type: CarouselActionTypes.FETCH_ERROR,
      payload: "error"
    });
    const expectedState = { data: [], errors: "error", loading: false };
    expect(actualState).toEqual(expectedState);
  });

  it("should handle GO_PREVIOUS", () => {
    const loadedState = { ...initialState, data: products };
    const actualState = reducer(loadedState, {
      type: CarouselActionTypes.GO_PREVIOUS
    });
    const expectedState = {
      data: [
        {
          title: "Booderee National Park",
          img: "https://placeimg.com/640/480/nature",
          location: "Jervis Bay JBT"
        },
        {
          title: "Kakadu National Park",
          img: "https://placeimg.com/240/240/nature",
          location: "Jabiru NT"
        },
        {
          title: "Uluru-Kata Tjuta National Park",
          img: "https://placeimg.com/640/480/nature",
          location: "Uluru NT"
        },
        {
          title: "Royal National Park",
          img: "https://placeimg.com/400/100/nature",
          location: "Royal National Park NSW"
        },
        {
          title: "Kosciuszko National Park",
          img: "https://placeimg.com/240/600/nature",
          location: "NSW"
        },
        {
          title: "Purnululu National Park",
          img: "https://placeimg.com/1200/400/nature",
          location: "Western Australia"
        },
        {
          title: "Wilsons Promontory National Park",
          img: "https://placeimg.com/320/320/nature",
          location: "Wilsons Promontory VIC"
        }
      ],
      errors: undefined,
      loading: false
    };
    expect(actualState).toEqual(expectedState);
  });

  it("should handle GO_NEXT", () => {
    const loadedState = { ...initialState, data: products };
    const actualState = reducer(loadedState, {
      type: CarouselActionTypes.GO_NEXT
    });
    const expectedState = {
      data: [
        {
          title: "Uluru-Kata Tjuta National Park",
          img: "https://placeimg.com/640/480/nature",
          location: "Uluru NT"
        },
        {
          title: "Royal National Park",
          img: "https://placeimg.com/400/100/nature",
          location: "Royal National Park NSW"
        },
        {
          title: "Kosciuszko National Park",
          img: "https://placeimg.com/240/600/nature",
          location: "NSW"
        },
        {
          title: "Purnululu National Park",
          img: "https://placeimg.com/1200/400/nature",
          location: "Western Australia"
        },
        {
          title: "Wilsons Promontory National Park",
          img: "https://placeimg.com/320/320/nature",
          location: "Wilsons Promontory VIC"
        },
        {
          title: "Booderee National Park",
          img: "https://placeimg.com/640/480/nature",
          location: "Jervis Bay JBT"
        },
        {
          title: "Kakadu National Park",
          img: "https://placeimg.com/240/240/nature",
          location: "Jabiru NT"
        }
      ],
      errors: undefined,
      loading: false
    };
    expect(actualState).toEqual(expectedState);
  });
});

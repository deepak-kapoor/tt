import { style } from "typestyle";

const sliderButton = {
  height: "300px",
  width: "75px",
  top: "0",
  bottom: "0",
  margin: "auto",
  "z-index": "1",
  display: "flex",
  "align-items": "center",
  "font-size": "40px",
  color: "#2985d6",
  background: "rgba(255, 255, 255, 0)"
};

const container = style({
  height: "350px",
  position: "relative",
  overflowX: "hidden"
});

const slider = style({
  position: "relative",
  margin: "0 auto"
});

const sliderWrapper = style({
  display: "flex",
  position: "absolute",
  transition: "transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)"
});

const cardContainer = style({
  transition: "transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)",

  $nest: {
    "&:hover": {
      transform: "scale(1.1)"
    }
  }
});

const previousButton = style(sliderButton, {
  position: "absolute",
  justifyContent: "center"
});

const nextButton = style(sliderButton, {
  position: "absolute",
  right: "0",
  justifyContent: "flex-end"
});

export {
  container,
  slider,
  sliderWrapper,
  previousButton,
  nextButton,
  cardContainer
};

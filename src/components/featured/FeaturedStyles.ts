import { style } from "typestyle";

const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr));"
});

export { grid };

import { style } from "typestyle";

const container = style({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #E8E9EB",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  height: "300px",
  margin: "20px",
  width: "200px",
  $nest: {
    "&:hover": {
      boxShadow: "0 16px 32px 0 rgba(0, 0, 0, 0.2)"
    }
  }
});

const image = (imageUrl: String) =>
  style({
    minHeight: "60%",
    background: `url(${imageUrl})`,
    backgroundRepeat: "round",
    transition: "0.5s"
  });

const details = style({
  height: "40%",
  padding: "2px 16px",
  background: "#F2F4F9",
  color: "#2985d6"
});
export { container, image, details };

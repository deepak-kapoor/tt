import * as t from "io-ts";

export const ProductCodec = t.type(
  {
    title: t.string,
    img: t.string,
    location: t.string
  },
  "ProductCodec"
);

export type Product = t.TypeOf<typeof ProductCodec>;

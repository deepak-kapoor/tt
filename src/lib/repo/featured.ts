import { Product, ProductCodec } from "../types";
import { get } from "../api";
import { withDecoded } from "./";
import { map } from "lodash";

function mapToModel(data: object): Product {
  return withDecoded(ProductCodec, data, decoded => ({
    ...decoded
  }));
}

export function fetchCollection(): Promise<Array<Product>> {
  return get({
    resource_path: "featured"
  }).then(response => map(response.data.data, mapToModel));
}

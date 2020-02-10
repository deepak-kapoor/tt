import React from "react";
import { Product } from "../../../lib/types";
import { container, image, details } from "./ProductCardStyles";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props): React.ReactElement {
  return (
    <div className={container}>
      <div className={image(product.img)}></div>
      <div className={details}>
        <h4>
          <b>{product.title}</b>
        </h4>
        <p>
          <FaMapMarkerAlt />
          {product.location}
        </p>
      </div>
    </div>
  );
}

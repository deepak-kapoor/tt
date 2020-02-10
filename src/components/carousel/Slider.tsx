import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../lib/types";
import ProductCard from "../common/productCard/ProductCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { goPrevious, goNext } from "../../store/carousel/actions";
import {
  container,
  slider,
  sliderWrapper,
  previousButton,
  nextButton,
  cardContainer
} from "./SliderStyles";

interface SliderProps {
  products: Array<Product>;
  showNavigationButtons: Boolean;
}

export default function({
  products,
  showNavigationButtons
}: SliderProps): React.ReactElement {
  const dispatch = useDispatch();

  const next = () => {
    dispatch(goNext());
  };

  const previous = () => {
    dispatch(goPrevious());
  };

  return (
    <div className={container}>
      {showNavigationButtons && (
        <div className={previousButton} onClick={() => previous()}>
          <FaArrowLeft className="icon" />
        </div>
      )}
      {showNavigationButtons && (
        <div className={nextButton} onClick={() => next()}>
          <FaArrowRight />
        </div>
      )}
      <div className={slider}>
        <div className={sliderWrapper}>
          {products.map((product, index) => (
            <div key={`slider-product-${index}`} className={cardContainer}>
              <ProductCard key={index} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

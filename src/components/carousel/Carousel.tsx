import React, { useState } from "react";
import { fetchRequest as fetchCarousel } from "../../store/carousel/actions";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import Slider from "./Slider";
import { Product } from "../../lib/types";
import { container, searchInputContainer } from "./CarouselStyles";

const applyFilter = (
  filter: string,
  products: Array<Product>
): Array<Product> => {
  return products.filter(products =>
    products.title.toLowerCase().includes(filter.toLowerCase())
  );
};

function Main(): React.ReactElement {
  const products = useSelector(
    (state: ApplicationState) => state.carousel.data
  );

  const [filterBy, setFilterBy] = useState("");

  return (
    <>
      <div className={searchInputContainer}>
        <input
          type="text"
          placeholder="Search..."
          onChange={e => setFilterBy(e.currentTarget.value)}
        />
      </div>
      <h2>Popular around you</h2>
      <Slider
        products={applyFilter(filterBy, products)}
        showNavigationButtons={filterBy.trim() === ""}
      />
    </>
  );
}

function CarouselContainer(): React.ReactElement {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCarousel());
  }, []);

  return (
    <div className={container}>
      <Main />
    </div>
  );
}

export default CarouselContainer;

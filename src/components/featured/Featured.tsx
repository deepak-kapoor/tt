import React from "react";
import { fetchRequest as fetchFeatured } from "../../store/featured/actions";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import ProductCard from "../common/productCard/ProductCard";
import { grid } from "./FeaturedStyles";

function Grid(): React.ReactElement {
  const products = useSelector(
    (state: ApplicationState) => state.featured.data
  );
  return (
    <div className={grid}>
      {products.map((product, index) => {
        return (
          <ProductCard key={`featured-product-${index}`} product={product} />
        );
      })}
    </div>
  );
}

function FeaturedContainer(): React.ReactElement {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchFeatured());
  }, []);

  return (
    <div>
      <h2>Featured</h2>
      <Grid />
    </div>
  );
}

export default FeaturedContainer;

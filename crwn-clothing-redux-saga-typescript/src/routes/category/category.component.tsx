import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import "./category.styles.scss";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  // these are ONLY keys of category route params
  // the reason why we do like this is becuase if there are additional params we wanna be able to have them accesible
  // also this must be string no loger being unknown

  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoryMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;

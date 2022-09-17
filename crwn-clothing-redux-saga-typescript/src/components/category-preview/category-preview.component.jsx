import ProductCard from "../product-card/product-card.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CollectionPreviewContainer>
      <h2>
        <TitleContainer to={title}>{title.toUpperCase()}</TitleContainer>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CategoryPreview;

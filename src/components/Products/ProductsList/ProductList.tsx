import ProductCard from '../ProductsCard/ProductCard';
import { TProduct } from '../../../types/entities/product-entity';
import { FC } from 'react';

interface ProductListProps {
  products: TProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  if (!products.length) {
    return <h3 className="flex-1 text-center text-2xl mt-20 lg:mt-0">Товары не найдены!</h3>;
  }

  return (
    <ul className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product: TProduct) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  );
};

export default ProductList;

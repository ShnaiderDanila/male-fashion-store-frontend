import ProductCard from './ProductCard';

import { products } from '../assets/products.json';

import { IProduct } from '../types/entities/product-entity';

const ProductList = () => {
  return (
    <ul className="grid grid-cols-3 gap-[30px]">
      {products.map((product: IProduct) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  );
};

export default ProductList;

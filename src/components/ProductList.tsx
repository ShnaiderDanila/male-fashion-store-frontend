import ProductCard from './ProductCard';
import productImage from '../assets/images/products/product-2.jpg';

const ProductList = () => {
  return (
    <ul className="grid grid-cols-3 gap-[30px]">
      <ProductCard image={productImage} name={'Piqué Biker Jacket'} price={6700} />
      <ProductCard image={productImage} name={'Piqué Biker Jacket'} price={6700} />
      <ProductCard image={productImage} name={'Piqué Biker Jacket'} price={6700} />
      <ProductCard image={productImage} name={'Piqué Biker Jacket'} price={6700} />
    </ul>
  );
};

export default ProductList;

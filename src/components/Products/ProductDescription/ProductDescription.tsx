import { FC } from 'react';
import { TProduct } from '../../../types/entities/product-entity';

interface ProductDescriptionProps {
  product: TProduct;
}

const ProductDescription: FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-3 items-center text-center lg:text-left lg:items-start">
      <h3 className="text-2xl font-bold uppercase tracking-m border-b border-gray pb-2">
        Описание товара
      </h3>
      <span>Тип продукта: {product.type}</span>
      <p>{product.description}</p>
      <span>Цвет: {product.color}</span>
      <span>Код товара: {product.productCode}</span>
    </div>
  );
};

export default ProductDescription;

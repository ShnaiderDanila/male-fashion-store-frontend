import { FC, useEffect, useState } from 'react';
import { TProduct } from '../../../types/entities/product-entity';
import { FaRegHeart } from 'react-icons/fa';
import Button from '../../ui/Button/Button';
import Container from '../../ui/Container/Container';
import { API_URL } from '../../../utils/constants/endpoints';
import { formatCost } from '../../../utils/functions/formatCost';

interface ProductPageComponentProps {
  currentProduct: TProduct | undefined;
}

const ProductPageComponent: FC<ProductPageComponentProps> = ({ currentProduct }) => {
  const [selectedSize, setSelectedSize] = useState<string | undefined>('');

  useEffect(() => {
    setSelectedSize(currentProduct?.availableSize[0]);
  }, [currentProduct?.availableSize]);

  return (
    <section className="py-16">
      <Container>
        <div className="mb-12 lg:mb-10 flex flex-wrap justify-center gap-5 lg:flex-nowrap lg:justify-between">
          <div className="max-w-[600px] lg:min-h-96">
            <img
              className="w-full object-cover object-center"
              src={`${API_URL}/${currentProduct?.image}`}
              alt={currentProduct?.name}
            />
          </div>
          <div className="flex flex-col items-center text-center gap-5 w-full ">
            <h6 className="font-bold text-2xl">{currentProduct?.brand}</h6>
            <span className="text-primary-light text-xl">{currentProduct?.name}</span>
            <div className="max-w-96 border-b border-gray pb-5">
              <span className="inline-block mb-5">Доступные размеры</span>
              <ul className="flex flex-wrap gap-3 justify-center">
                {currentProduct?.availableSize.map((size: string) => (
                  <li
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${selectedSize === size ? 'text-white bg-primary' : 'bg-gray hover:bg-primary-light'} transition-all duration-200 cursor-pointer py-1 px-4`}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-bold text-2xl">
              {currentProduct?.price && formatCost(currentProduct.price)}
            </p>
            <Button>
              <span>Добавить в корзину</span>
              <span>{selectedSize}</span>
            </Button>
            <button className="bg-gray max-w-96 w-full py-3 px-6 flex items-center justify-center gap-3 transition-all duration-200 opacity-100 hover:opacity-75">
              Добавить в избранное <span>{<FaRegHeart />}</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center text-center lg:text-left lg:items-start">
          <h3 className="text-2xl font-bold uppercase tracking-m border-b border-gray pb-2">
            Описание товара
          </h3>
          <span>Тип продукта: {currentProduct?.type}</span>
          <p>{currentProduct?.description}</p>
          <span>Цвет: {currentProduct?.color}</span>
          <span>Код товара: {currentProduct?.productCode}</span>
        </div>
      </Container>
    </section>
  );
};

export default ProductPageComponent;

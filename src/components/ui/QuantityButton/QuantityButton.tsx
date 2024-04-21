import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TCartProduct } from '../../../types/entities/product-entity';
import { addProduct, removeProduct } from '../../../store/slices/cartSlice';
import { useLocation } from 'react-router-dom';

interface QuantityButtonProps {
  product: TCartProduct;
}

const QuantityButton: FC<QuantityButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  const location = useLocation();

  if (location.pathname.includes('catalog')) {
    return (
      <div className="bg-gray w-full h-16 flex justify-between items-center rounded-md">
        <button
          className="text-2xl bg-transparent h-full px-6 transition-all duration-200 lg:hover:bg-primary-light rounded-md"
          onClick={() => dispatch(addProduct(product))}
        >
          +
        </button>
        <span className="flex flex-col items-center justify-center lg:flex-row gap-1">
          Количество
          <span className="truncate max-w-24">{product.count} шт.</span>
        </span>
        <button
          onClick={() => dispatch(removeProduct(product))}
          className="text-3xl bg-transparent h-full px-6 transition-all duration-200 lg:hover:bg-primary-light rounded-md"
        >
          -
        </button>
      </div>
    );
  }

  if (location.pathname.includes('cart')) {
    return (
      <div
        className={`bg-transparent w-full flex gap-3 sm:gap-4 items-center justify-center sm:justify-start rounded-md`}
      >
        <button
          className="text-xl h-[36px] px-6 transition-all duration-200 bg-gray lg:hover:bg-primary-light rounded-md"
          onClick={() => dispatch(addProduct(product))}
        >
          +
        </button>
        <span className="flex gap-1">
          <span className="truncate max-w-16 sm:max-w-24">{product.count}</span>
          шт.
        </span>
        <button
          onClick={() => dispatch(removeProduct(product))}
          className="text-3xl h-[36px] px-6 transition-all duration-200 bg-gray lg:hover:bg-primary-light rounded-md"
        >
          -
        </button>
      </div>
    );
  }
};

export default QuantityButton;

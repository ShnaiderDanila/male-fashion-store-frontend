import { FC } from 'react';
import { TCartProduct } from '../../../types/entities/product-entity';
import { formatCost } from '../../../utils/functions/formatCost';
import { Link } from 'react-router-dom';
import QuantityButton from '../../ui/QuantityButton/QuantityButton';

interface CartItemProps {
  product: TCartProduct;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  return (
    <div
      className="gap-5 w-full grid grid-cols-1 justify-items-center 
    sm:justify-items-start sm:grid-cols-3"
    >
      <div className="max-w-36">
        <Link to={`/catalog/${product.id}`}>
          <img
            src={`${import.meta.env.VITE_REACT_API_URL}/${product.image}`}
            alt={product.name}
            className="w-full"
          />
        </Link>
      </div>
      <div
        className="flex flex-col justify-items-center text-center gap-1 sm:text-left sm:col-start-2 
      sm:col-end-4 w-full "
      >
        <h6 className="font-bold truncate">{product.brand}</h6>
        <p className="line-clamp-2 lg:line-clamp-1">{product.name}</p>
        <p className="text-primary-medium font-bold truncate">{formatCost(product.price)}</p>
        <p className=" text-primary-light truncate">{product.size}</p>
        <QuantityButton product={product} />
      </div>
    </div>
  );
};

export default CartItem;

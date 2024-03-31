import { FC } from 'react';
import { formatCost } from '../../../utils/functions/formatCost';

interface CartItemListProps {
  item: {
    name: string;
    brand: string;
    price: number;
    availableSize: string;
    image: string;
  };
}

const CartItem: FC<CartItemListProps> = ({ item }) => {
  return (
    <div className="flex gap-5">
      <div className="max-w-24">
        <img src={item.image} alt={item.name} className="w-full" />
      </div>
      <div>
        <p className="font-bold">{item.brand}</p>
        <p className="text-primary-light">{item.name}</p>
        <p>{item.availableSize}</p>
        <p className="font-bold">{formatCost(item.price)}</p>
      </div>
    </div>
  );
};

export default CartItem;

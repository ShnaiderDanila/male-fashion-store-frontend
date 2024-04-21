import { FC } from 'react';
import { TCartProduct } from '../../../types/entities/product-entity';
import CartItem from '../CartItem/CartItem';
import { useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../store/store';

const CartItemList: FC = () => {
  const cartProducts = useAppSelector((state: RootState) => state.cartReducer.products);

  return (
    <div className="lg:p-5 lg:shadow-md lg:rounded-lg w-full mb-5 lg:max-h-[530px] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray ">
      <ul className="flex flex-col gap-10 lg:gap-5 w-full">
        {cartProducts.map((product: TCartProduct) => (
          <CartItem key={`${product.id + product.size}`} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;

import { cartItems } from '../../../assets/cartItems.json';
import CartItem from '../CartItem/CartItem';

const CartItemList = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center mb-10 text-lg">Корзина</h2>
      <ul className="flex flex-col gap-5">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;

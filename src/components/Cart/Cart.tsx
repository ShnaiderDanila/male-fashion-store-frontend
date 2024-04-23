import { IoTrashBin } from 'react-icons/io5';
import CartItemList from './CartItemList/CartItemList';
import { formatCost } from '../../utils/functions/formatCost';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { removeAllProducts } from '../../store/slices/cartSlice';
import CustomButton from '../ui/CustomButton/CustomButton';

const Cart = () => {
  const navigate = useNavigate();

  const cartTotalCount = useAppSelector((state: RootState) => state.cartReducer.totalCount);
  const totalPrice = useAppSelector((state: RootState) => state.cartReducer.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="max-w-[600px] mx-auto">
      <div
        className="flex flex-col items-center lg:flex-row lg:justify-between w-full mb-10 
      lg:px-5 text-lg text-primary-light lg:mb-0"
      >
        <p className="flex gap-1">
          Количество товаров:
          <span className="max-w-24 truncate">{cartTotalCount}</span>
          шт.
        </p>
        <button
          className="flex items-center gap-3 p-3 lg:px-0"
          onClick={() => dispatch(removeAllProducts())}
        >
          Очистить корзину <IoTrashBin />
        </button>
      </div>
      <CartItemList />
      {/* Desktop */}
      <div className="hidden lg:flex flex-col items-center text-primary-medium gap-5">
        <p className="text-2xl font-semibold flex gap-3">
          Итого:
          <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-96">
            {formatCost(totalPrice)}
          </span>
        </p>
        <CustomButton onClick={() => navigate('/checkout')}>Перейти к оформлению</CustomButton>
      </div>
      {/* Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 shadow-lg p-5 bg-white w-screen flex justify-center">
        <CustomButton
          onClick={() => navigate('/checkout')}
          maxWidth="90%"
          height="64px"
          flexDirection="column"
          gap="0"
        >
          <span>Перейти к оформлению</span>
          <span>{formatCost(totalPrice)}</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default Cart;

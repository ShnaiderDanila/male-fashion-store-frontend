import { useNavigate } from 'react-router-dom';
import CustomButton from '../../ui/CustomButton/CustomButton';
import emptyCart from '../../../assets/images/cart/empty-cart.png';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="max-w-96 object-cover object-center">
        <img src={emptyCart}></img>
      </div>

      <h2 className="uppercase tracking-m text-center font-semibold">
        В вашей корзине нет товаров
      </h2>
      <p className="text-center">Для выбора вещей перейдите в каталог</p>
      <CustomButton maxWidth="384px" onClick={() => navigate('/catalog')}>
        Перейти в каталог
      </CustomButton>
    </div>
  );
};

export default EmptyCart;

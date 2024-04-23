import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import Order from './Order/Order';
import { useMemo, useState } from 'react';
import CustomButton from '../ui/CustomButton/CustomButton';
import { TOrder } from '../../types/entities/order-entity';

const OrdersList = () => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);

  const [loadedOders, setLoadedOrders] = useState(2);

  const loadMoreOrders = () => {
    setLoadedOrders((prevCount) => prevCount + 2);
  };

  const sortedOrdersFromNewToOld = useMemo(() => {
    if (currentUser?.orders) {
      const newArr = [...currentUser.orders];
      return newArr.reverse();
    }
    return [];
  }, [currentUser]);

  return (
    <section className="max-w-96 lg:max-w-3xl mx-auto">
      <h6 className="mb-3 text-lg">История заказов</h6>

      {sortedOrdersFromNewToOld.length > 0 ? (
        <>
          <ul className="flex flex-col gap-5">
            {sortedOrdersFromNewToOld &&
              sortedOrdersFromNewToOld
                .slice(0, loadedOders)
                .map((order: TOrder) => <Order key={order.id} order={order} />)}
          </ul>
          <div className="mt-5">
            {sortedOrdersFromNewToOld && loadedOders < sortedOrdersFromNewToOld.length && (
              <CustomButton onClick={loadMoreOrders}>Загрузить еще</CustomButton>
            )}
          </div>
        </>
      ) : (
        <p>Вы еще не совершали покупок!</p>
      )}
    </section>
  );
};

export default OrdersList;

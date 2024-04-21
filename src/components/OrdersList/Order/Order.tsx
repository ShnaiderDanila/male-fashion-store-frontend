import { FC } from 'react';
import { TOrder } from '../../../types/entities/order-entity';
import { formatCreationDate } from '../../../utils/functions/formatCreationDate';
import { formatCost } from '../../../utils/functions/formatCost';

interface OrderProps {
  order: TOrder;
}

const Order: FC<OrderProps> = ({ order }) => {
  const orderOptions = [
    {
      title: 'Номер заказа: ',
      value: order.id,
    },
    {
      title: 'Дата оформления: ',
      value: formatCreationDate(order.createdAt),
    },
    {
      title: 'Сумма заказа: ',
      value: formatCost(order.totalPrice),
    },
    {
      title: 'Адрес доставки: ',
      value: order.address,
    },
    {
      title: 'Способ доставки: ',
      value: order.deliveryMethod,
    },
  ];

  return (
    <div className="flex flex-col justify-between gap-3 pb-5 border-b border-gray text-sm">
      {orderOptions.map((option) => (
        <p key={option.title}>
          <span className="text-primary-light mr-1">{option.title}</span>
          {option.value}
        </p>
      ))}
      <ul className="flex flex-wrap gap-3">
        {order.products.map((product, index) => (
          <li key={`${product.id}${product.size}${index}`} className="lg:max-w-28 max-w-16">
            <div className="object-cover object-center">
              <img src={`${import.meta.env.VITE_REACT_API_URL}/${product.image}`} />
            </div>
            <div className="max-w-24 font-semibold text-center mx-auto mt-1">
              <p className="truncate">{product.size}</p>
              <p className="truncate">x{product.count}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;

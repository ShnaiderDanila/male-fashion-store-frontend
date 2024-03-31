import { FC } from 'react';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { formatCost } from '../../../utils/functions/formatCost';

interface ProductCardProps {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
  availableSize: string[];
}

const ProductCard: FC<ProductCardProps> = ({ id, brand, name, price, image, availableSize }) => {
  return (
    <article className="w-full flex flex-col relative group overflow-hidden">
      <div className="hidden lg:flex flex-col gap-2 items-center absolute z-10 -mr-16 right-5 top-5 transition-all duration-500 group-hover:mr-0">
        <button className="bg-white w-9 h-9 flex items-center justify-center">
          <CiHeart className="text-2xl hover:text-red" />
        </button>
      </div>

      <Link to={`/catalog/${id}`} className="relative cursor-pointer">
        <div className="absolute top-0 left-0 bg-black z-2 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-10"></div>
        <img
          className="w-full h-full object-cover object-center"
          src={`${import.meta.env.VITE_REACT_API_URL}/${image}`}
        />
      </Link>
      <div className="mt-6 flex flex-1 flex-col whitespace-nowrap">
        <h6 className="mb-1.5 font-bold overflow-hidden text-ellipsis">{brand}</h6>
        <p className="mb-1.5 overflow-hidden text-ellipsis">{name}</p>
        <p className="text-primary-medium font-bold mt-auto overflow-hidden text-ellipsis mb-1.5">
          {formatCost(price)}
        </p>
        <p className="tracking-[0.5rem] overflow-hidden text-ellipsis text-primary-light">
          {availableSize}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;

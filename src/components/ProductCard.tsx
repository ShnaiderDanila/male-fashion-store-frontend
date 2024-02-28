import { FC } from 'react';
import { BsBagPlus } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';

interface ProductCardProps {
  brand: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard: FC<ProductCardProps> = ({ brand, name, price, image }) => {
  return (
    <article className="max-w-[260px] flex flex-col relative group overflow-hidden">
      <div className="flex flex-col gap-2 items-center absolute z-10 mr-[-70px] right-5 top-5 transition-all duration-500 group-hover:mr-[0px]">
        <button className="bg-white w-9 h-9 flex items-center justify-center">
          <BsBagPlus className="text-xl hover:text-red" />
        </button>
        <button className="bg-white w-9 h-9 flex items-center justify-center">
          <CiHeart className="text-2xl hover:text-red" />
        </button>
      </div>
      <div className="relative cursor-pointer">
        <div className="absolute top-0 left-0 bg-black z-2 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-10"></div>
        <img className="w-full h-[260px] object-cover object-center" src={image}></img>
      </div>
      <div className="mt-[25px] flex-1 flex flex-col items-start">
        <h6 className="text-[15px] mb-[5px] font-bold">{brand}</h6>
        <p className="text-[15px] mb-[5px]">{name}</p>
        <p className="text-[#0D0D0D] text-[18px] font-bold mt-auto">{price} ₽</p>
      </div>
    </article>
  );
};

export default ProductCard;

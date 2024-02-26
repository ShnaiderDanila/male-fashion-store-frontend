import { FC } from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

const ProductCard: FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <article className="max-w-[260px] flex flex-col">
      <div>
        <img className="w-full h-[260px] object-cover object-center" src={image}></img>
      </div>
      <div className="mt-[25px] flex-1 flex flex-col items-start">
        <h6 className="text-[15px] mb-[5px]">{name}</h6>
        <p className="text-[#0D0D0D] text-[18px] font-bold mt-auto">₽{price}</p>
      </div>
    </article>
  );
};

export default ProductCard;

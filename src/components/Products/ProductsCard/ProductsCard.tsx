import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatCost } from '../../../utils/functions/formatCost';
import { TProduct } from '../../../types/entities/product-entity';
import { productsAPI } from '../../../utils/api/services/ProductsService';
import { TErrorResponce } from '../../../types/error-responce';
import { toast } from 'react-toastify';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { checkLikedProduct } from '../../../utils/functions/checkLikedProduct';
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../hooks/redux';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../store/slices/userSlice';

interface ProductCardProps {
  product: TProduct;
}

const ProductsCard: FC<ProductCardProps> = ({ product }) => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);

  const thisProductIsLiked = checkLikedProduct(currentUser?.wishlist, product);

  const [likeProduct] = productsAPI.useToggleLikeProductByIdMutation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLikeProduct = async () => {
    if (currentUser) {
      await likeProduct(product.id)
        .unwrap()
        .then((user) => {
          if (user) {
            dispatch(updateUser(user));
          }
        })
        .catch((error: TErrorResponce) => {
          if (error.data) {
            toast.error(error.data.message);
          } else {
            toast.error('Ошибка сервера! Пожалуйста, повторите попытку позже.');
          }
        });
    } else {
      navigate('/signin');
    }
  };

  return (
    <article className="w-full flex flex-col relative group overflow-hidden">
      <div className="hidden lg:flex flex-col gap-2 items-center absolute z-10 -mr-16 right-5 top-5 transition-all duration-500 group-hover:mr-0">
        <button
          className="bg-white w-9 h-9 flex items-center justify-center text-xl"
          onClick={handleLikeProduct}
        >
          {thisProductIsLiked ? (
            <FaHeart className="text-red hover:opacity-70 transition-all duration-200" />
          ) : (
            <FaRegHeart className="hover:opacity-70 transition-all duration-200" />
          )}
        </button>
      </div>

      <Link to={`/catalog/${product.id}`} className="relative cursor-pointer">
        <div className="absolute top-0 left-0 bg-black z-2 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-10"></div>
        <img
          className="w-full h-full object-cover object-center"
          src={`${import.meta.env.VITE_REACT_API_URL}/${product.image}`}
        />
      </Link>
      <div className="mt-6 flex flex-1 flex-col">
        <h6 className="mb-1.5 font-bold truncate">{product.brand}</h6>
        <p className="mb-1.5 line-clamp-2">{product.name}</p>
        <p className="text-primary-medium font-bold truncate mb-1.5 mt-auto">
          {formatCost(product.price)}
        </p>
        <ul className=" text-primary-light flex gap-2 truncate">
          {product.availableSize.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProductsCard;

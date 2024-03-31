import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';

const HeaderActions = () => {
  return (
    <ul className="flex justify-center items-center lg:gap-3">
      <li>
        <Link className="relative flex items-center justify-center p-2 " to="/cart">
          <HiOutlineShoppingBag className="text-4xl lg:text-3xl" />
          <div className="absolute flex justify-center items-center left-7 top-7 bg-white-medium w-6 h-6 rounded-full lg:left-6 lg:top-6">
            <span className="text-primary text-xs">5</span>
          </div>
        </Link>
      </li>
      <li>
        <Link className="hidden lg:flex items-center justify-center p-2 lg:p-2" to="/wishlist">
          <FaRegHeart className="text-2xl" />
        </Link>
      </li>
      <li>
        <Link className="hidden lg:flex items-center justify-center p-2 lg:p-2" to="/profile">
          <FaRegUser className="text-2xl" />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderActions;

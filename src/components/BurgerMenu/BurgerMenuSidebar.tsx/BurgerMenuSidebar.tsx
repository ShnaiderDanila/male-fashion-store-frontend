import { FC } from 'react';

import { navbarMobileLinks } from '../../../utils/constants/navbarLinks';

import { MdArrowForwardIos } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../hooks/redux';

import { BiLogOut } from 'react-icons/bi';

interface BurgerMenuSidebarProps {
  toggleBurgerMenu: () => void;
  logout: () => void;
}

const BurgerMenuSidebar: FC<BurgerMenuSidebarProps> = ({ toggleBurgerMenu, logout }) => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);
  const navigate = useNavigate();

  const mobileLogout = () => {
    toggleBurgerMenu();
    logout();
  };

  const mobileLogin = () => {
    toggleBurgerMenu();
    navigate('/signin');
  };

  return (
    <div className="flex flex-col gap-5">
      <ul>
        {navbarMobileLinks.map((item) => (
          <Link
            key={item.title}
            onClick={toggleBurgerMenu}
            to={item.link}
            className="flex justify-between items-center py-4 w-full font-semibold"
          >
            <span>{item.title}</span>
            <MdArrowForwardIos />
          </Link>
        ))}
        <button
          onClick={currentUser ? mobileLogout : mobileLogin}
          className="flex items-center justify-between w-full font-semibold py-4 text-primary-light"
        >
          {currentUser ? 'Выйти' : 'Войти'}
          <BiLogOut className="text-lg" />
        </button>
      </ul>
      <p>Бесплатная доставка, 30-дневная гарантия возврата средств.</p>
    </div>
  );
};

export default BurgerMenuSidebar;

import { Link, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { toast } from 'react-toastify';

import Logo from '../ui/Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Container from '../ui/Container/Container';
import HeaderActions from './HeaderActions/HeaderActions';
import HeaderMainLinks from './HeaderMainLinks/HeaderMainLinks';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { removeUser } from '../../store/slices/userSlice';

import logo from '../../assets/images/logo.png';
import { removeAllProducts } from '../../store/slices/cartSlice';

const Header: FC = () => {
  const navigate = useNavigate();

  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(removeUser());
    dispatch(removeAllProducts());
    localStorage.removeItem('token');
    toast.success('Выход выполнен успешно!');
    navigate('/', { replace: true });
  };

  return (
    <>
      <header className="fixed z-20 w-full bg-white">
        <div className="hidden lg:block bg-primary text-white">
          <Container>
            <div className="flex justify-between items-center">
              <p className="text-left">
                Бесплатная доставка, 30-дневная гарантия возврата денежных средств
              </p>
              {currentUser ? (
                <button className="p-2.5" onClick={logout}>
                  Выйти
                </button>
              ) : (
                <Link className="p-2.5" to="/signin">
                  Войти
                </Link>
              )}
            </div>
          </Container>
        </div>
        <Container>
          <nav className="flex lg:flex-row flex-row-reverse justify-between items-center h-20 w-full">
            <Link to="/" className="m-auto max-w-40 sm:max-w-full pr-8 lg:m-0 lg:pr-0">
              <Logo logo={logo} />{' '}
            </Link>
            <HeaderMainLinks />
            <HeaderActions />
          </nav>
        </Container>
      </header>
      <BurgerMenu logout={logout} />
    </>
  );
};

export default Header;

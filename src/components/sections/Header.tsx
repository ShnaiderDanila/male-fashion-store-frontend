import { Link } from 'react-router-dom';

import Logo from '../ui/Logo';
import Navbar from '../ui/Navbar';
import Cart from '../ui/Cart';

import logo from '../../assets/images/logo.png';

import { headerNavbarItems } from '../../utils/constants/headerNavbarItems';

const Header = () => {
  return (
    <header>
      <div className="py-[10px] bg-primary text-white">
        <div className="container flex justify-between items-center">
          <p className="pr-4">Бесплатная доставка, 30-дневная гарантия возврата средств.</p>
        </div>
      </div>
      <div className="container py-[26px] flex justify-between items-center">
        <Link to="/">
          <Logo logo={logo} />{' '}
        </Link>
        <Navbar navbarItems={headerNavbarItems} />
        <Cart />
      </div>
    </header>
  );
};

export default Header;

import { FC, useState } from 'react';

import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

import BurgerMenuSidebar from './BurgerMenuSidebar.tsx/BurgerMenuSidebar';
import ModalMenu from '../ui/ModalMenu/ModalMenu';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

interface BurgerMenuProps {
  logout: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBodyScrollLock = useBodyScrollLock();

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
    toggleBodyScrollLock();
  };

  return (
    <>
      <button
        onClick={toggleBurgerMenu}
        className="block lg:hidden border border-primary p-1.5 fixed z-[30] top-5 right-5"
      >
        <IoMdMenu className="text-2xl" />
      </button>
      <ModalMenu visible={isOpen} setVisible={toggleBurgerMenu} title="Меню" CloseIcon={IoMdClose}>
        <BurgerMenuSidebar toggleBurgerMenu={toggleBurgerMenu} logout={logout} />
      </ModalMenu>
    </>
  );
};

export default BurgerMenu;

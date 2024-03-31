import { FC, useState } from 'react';
import ModalMenu from '../ui/ModalMenu/ModalMenu';
import { GoSortDesc } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa6';
import { SortItems } from '../../utils/enums/sortItems';
import { IoMdClose } from 'react-icons/io';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

interface SortMenuMobileProps {
  selectedSortItem: string;
  selectSort: (sortItem: string) => void;
}

const SortMenuMobile: FC<SortMenuMobileProps> = ({ selectedSortItem, selectSort }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleBodyScrollLock = useBodyScrollLock();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    toggleBodyScrollLock();
  };

  const selectSortItem = (sortItem: string) => {
    selectSort(sortItem);
    toggleMenu();
  };

  return (
    <>
      <button onClick={toggleMenu} className="p-3 flex items-center gap-3">
        <GoSortDesc className="text-2xl" />
        <span>Сортировка</span>
      </button>
      {menuIsOpen && (
        <ModalMenu
          title={'Сортировка'}
          visible={menuIsOpen}
          setVisible={toggleMenu}
          CloseIcon={IoMdClose}
        >
          <ul>
            {Object.values(SortItems).map((sortItem) => (
              <li key={sortItem} className={'flex items-center gap-3 border-b border-gray'}>
                <button
                  onClick={() => selectSortItem(sortItem)}
                  type="button"
                  className="py-4 w-full flex items-center gap-4"
                >
                  <div
                    className={`flex items-center justify-center rounded-full w-5 h-5 border 
                  ${sortItem === selectedSortItem ? 'bg-primary' : 'bg-transparent'}`}
                  >
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span>{sortItem}</span>
                </button>
              </li>
            ))}
          </ul>
        </ModalMenu>
      )}
    </>
  );
};

export default SortMenuMobile;

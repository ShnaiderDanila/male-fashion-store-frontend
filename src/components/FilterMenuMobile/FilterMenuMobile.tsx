import { ChangeEvent, FC, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import ModalMenu from '../ui/ModalMenu/ModalMenu';
import FilterMenuMobileCategory from './FilterMenuMobileCategory/FilterMenuMobileCategory';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

interface FilterMenuMobileProps {
  categories: {
    title: string;
    options: string[];
  }[];
  selectedOptions: string[];
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterMenuMobile: FC<FilterMenuMobileProps> = ({
  categories,
  selectedOptions,
  handleCheckboxChange,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleBodyScrollLock = useBodyScrollLock();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    toggleBodyScrollLock();
  };

  return (
    <>
      <button onClick={toggleMenu} className="p-3 flex items-center gap-3">
        <FiFilter className="text-2xl" />
        <span>Фильтр</span>
      </button>

      {menuIsOpen && (
        <ModalMenu
          title={'Фильтр'}
          visible={menuIsOpen}
          setVisible={toggleMenu}
          CloseIcon={IoMdClose}
        >
          <ul>
            {categories.map((category, index) => (
              <FilterMenuMobileCategory
                key={index}
                category={category}
                selectedOptions={selectedOptions}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </ul>
        </ModalMenu>
      )}
    </>
  );
};

export default FilterMenuMobile;

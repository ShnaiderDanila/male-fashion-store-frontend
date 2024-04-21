import { FC, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import ModalMenu from '../../ui/ModalMenu/ModalMenu';
import ProductsFilterMobileCategory from './ProductsFilterMobileCategory/ProductsFilterMobileCategory';
import useBodyScrollLock from '../../../hooks/useBodyScrollLock';
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../hooks/redux';
import CustomButton from '../../ui/CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { removeAllSelectedFilters } from '../../../store/slices/filterSlice';
import { calculateSelectedFilterOptionsLength } from '../../../utils/functions/filterProducts.ts';

const ProductsFilterMobile: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleBodyScrollLock = useBodyScrollLock();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    toggleBodyScrollLock();
  };

  const selectedFilterOptions = useAppSelector(
    (state: RootState) => state.filterReducer.selectedFilterOptions,
  );

  const selectedFilterOptionsLength = calculateSelectedFilterOptionsLength(selectedFilterOptions);

  const categories = useAppSelector((state: RootState) => state.filterReducer.filterCategories);

  const dispatch = useDispatch();

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
              <ProductsFilterMobileCategory key={index} category={category} />
            ))}
          </ul>
          {selectedFilterOptionsLength > 0 && (
            <CustomButton
              backgroundColor="#e5e5e5"
              color="black"
              onClick={() => dispatch(removeAllSelectedFilters())}
            >
              Сбросить фильтры {`(${selectedFilterOptionsLength})`}
            </CustomButton>
          )}
        </ModalMenu>
      )}
    </>
  );
};

export default ProductsFilterMobile;

import { useAppSelector } from '../../../hooks/redux';
import ProductsFilterCategory from './ProductsFilterCategory/ProductsFilterCategory';
import { FC } from 'react';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { removeAllSelectedFilters } from '../../../store/slices/filterSlice';
import { IoMdClose } from 'react-icons/io';
import { calculateSelectedFilterOptionsLength } from '../../../utils/functions/filterProducts.ts';

const ProductsFilter: FC = () => {
  const categories = useAppSelector((state: RootState) => state.filterReducer.filterCategories);

  const selectedFilterOptions = useAppSelector(
    (state: RootState) => state.filterReducer.selectedFilterOptions,
  );

  const selectedFilterOptionsLength = calculateSelectedFilterOptionsLength(selectedFilterOptions);

  const dispatch = useDispatch();

  const handleRemoveFilters = () => {
    dispatch(removeAllSelectedFilters());
  };

  return (
    <aside className="hidden lg:flex flex-col min-w-56 gap-6">
      {selectedFilterOptionsLength > 0 && (
        <button
          className="flex items-center gap-3 transition-all duration-200 hover:opacity-50 mb-2"
          onClick={handleRemoveFilters}
        >
          <div className="rounded-full bg-gray p-2">
            <IoMdClose />
          </div>
          Сбросить фильтры
        </button>
      )}
      {categories?.map((category) => (
        <ProductsFilterCategory key={category.title} category={category} />
      ))}
    </aside>
  );
};

export default ProductsFilter;

import { FC, useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';
import { MdArrowForwardIos } from 'react-icons/md';

import ModalMenu from '../../../ui/ModalMenu/ModalMenu';
import { TFilterCategory } from '../../../../types/entities/product-entity';
import { useAppSelector } from '../../../../hooks/redux';
import { RootState } from '../../../../store/store';
import { useDispatch } from 'react-redux';
import { toggleSelectedFilterOptions } from '../../../../store/slices/filterSlice';

interface ProductsFilterMobileCategoryProps {
  category: TFilterCategory;
}

const ProductsFilterMobileCategory: FC<ProductsFilterMobileCategoryProps> = ({ category }) => {
  const [categoryMenuIsOpen, setCategoryMenuIsOpen] = useState(false);

  const selectedFilterOptions = useAppSelector(
    (state: RootState) => state.filterReducer.selectedFilterOptions,
  );

  const dispatch = useDispatch();

  return (
    <>
      <li className={'flex items-center gap-3 border-b border-gray'}>
        <button
          onClick={() => setCategoryMenuIsOpen(!categoryMenuIsOpen)}
          type="button"
          className="py-4 w-full flex justify-between items-center gap-4"
        >
          <span>{category.title}</span>
          <div className="flex items-center gap-4">
            {selectedFilterOptions[category.value].length > 0 && (
              <div className="rounded-full w-5 h-5 bg-primary text-white flex items-center justify-center text-[12px]">
                {selectedFilterOptions[category.value].length}
              </div>
            )}
            <MdArrowForwardIos />
          </div>
        </button>
      </li>
      {categoryMenuIsOpen && (
        <ModalMenu
          title={category.title}
          visible={categoryMenuIsOpen}
          setVisible={setCategoryMenuIsOpen}
          CloseIcon={IoArrowBack}
        >
          <ul className="overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray">
            {category.options.map((option, index) => (
              <li key={index} className={'flex items-center gap-3 border-b border-gray'}>
                <label className="flex items-center gap-3 py-4 w-full cursor-pointer">
                  <div className="min-w-4 min-h-4 bg-gray relative">
                    {selectedFilterOptions[category.value].includes(option) && (
                      <IoCheckmark className="w-full absolute top-0 left-0 text-primary" />
                    )}
                  </div>
                  <input
                    type="checkbox"
                    value={option}
                    onChange={(e) =>
                      dispatch(
                        toggleSelectedFilterOptions({
                          categoryTitle: category.title,
                          value: category.value,
                          selectedOption: e.target.value,
                        }),
                      )
                    }
                    className="hidden"
                    data-category={category.title}
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </ModalMenu>
      )}
    </>
  );
};

export default ProductsFilterMobileCategory;

import { FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { toggleSelectedFilterOptions } from '../../../../store/slices/filterSlice';
import { RootState } from '../../../../store/store';
import { useAppSelector } from '../../../../hooks/redux';
import { TFilterCategory } from '../../../../types/entities/product-entity';

interface ProductsFilterCategoryProps {
  category: TFilterCategory;
}

const ProductsFilterCategory: FC<ProductsFilterCategoryProps> = ({ category }) => {
  const [categoryListIsOpen, setCategoryListIsOpen] = useState(false);

  const selectedFilterOptions = useAppSelector(
    (state: RootState) => state.filterReducer.selectedFilterOptions,
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h6
        className="uppercase text-primary mb-3 font-bold flex items-center justify-between cursor-pointer"
        onClick={() => setCategoryListIsOpen(!categoryListIsOpen)}
      >
        {category.title}

        <div className="flex items-center gap-2">
          {selectedFilterOptions[category.value].length > 0 && (
            <div className="rounded-full w-5 h-5 bg-primary text-white flex items-center justify-center text-[12px]">
              {selectedFilterOptions[category.value].length}
            </div>
          )}

          <IoIosArrowDown
            className={`ml-1 transition-all text-2xl duration-300 ${categoryListIsOpen && '-rotate-180'}`}
          />
        </div>
      </h6>

      <ul
        className={`flex flex-col gap-4 text-primary-light overflow-auto max-h-64 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray`}
      >
        {category.options.map((option) => (
          <li
            key={option}
            className={`transition-all duration-300 flex items-center gap-3 ${categoryListIsOpen ? 'mt-0' : '-mt-12'}`}
          >
            <label
              className={`hover:text-primary cursor-pointer flex items-center gap-3 transition-all duration-300 w-full
              ${selectedFilterOptions[category.value].includes(option) && 'text-primary'}`}
            >
              <div className="min-w-4 min-h-4 bg-gray relative">
                {selectedFilterOptions[category.value].includes(option) && (
                  <IoCheckmarkSharp className="w-full absolute top-0 left-0 text-primary" />
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
                className="w-4 h-4 cursor-pointer hidden"
              />
              <p>{option}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilterCategory;

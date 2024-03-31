import { FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { SortItems } from '../../../utils/enums/sortItems';

interface ProductSortProps {
  selectedSortItem: string;
  selectSort: (sortItem: string) => void;
}

const ProductsSort: FC<ProductSortProps> = ({ selectedSortItem, selectSort }) => {
  const [sortPopupIsOpen, setSortPopupIsOpen] = useState(false);

  const selectSortItem = (sortItem: string) => {
    selectSort(sortItem);
    setSortPopupIsOpen(false);
  };

  return (
    <div className="hidden lg:flex mt-0 relative self-end">
      <span className="flex gap-2">
        Сортировка:
        <span
          onClick={() => setSortPopupIsOpen(!sortPopupIsOpen)}
          className="text-primary font-bold flex items-center cursor-pointer select-none"
        >
          {selectedSortItem}{' '}
          <IoIosArrowDown
            className={`ml-1 transition-all duration-300 ${sortPopupIsOpen && '-rotate-180'}`}
          />
        </span>
      </span>
      <div
        className={`absolute top-7 right-0 z-[15] bg-white transition-all duration-300 ${sortPopupIsOpen ? 'block' : 'hidden'}`}
      >
        <ul className="border-2 border-white-medium text-sm">
          {Object.values(SortItems).map((sortItem) => (
            <li
              key={sortItem}
              className={`pr-5 pl-2.5 py-2.5 cursor-pointer  ${selectedSortItem === sortItem ? 'bg-white-medium' : 'hover:bg-white-medium'}`}
              onClick={() => selectSortItem(sortItem)}
            >
              {sortItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsSort;

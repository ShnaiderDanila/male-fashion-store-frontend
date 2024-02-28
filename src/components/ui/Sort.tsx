import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const sortList = [
  { id: 0, title: 'по возрастанию цены' },
  { id: 1, title: 'по убыванию цены' },
  { id: 2, title: 'по алфавиту' },
];

const Sort = () => {
  const [sortPopupIsOpen, setSortPopupIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('по возрастанию цены');

  const selectSort = (item: string) => {
    setSelectedSort(item);
    setSortPopupIsOpen(false);
  };

  return (
    <div className="sort mb-[45px] flex justify-end relative">
      <span className="text-[15px] flex gap-2">
        Сортировать:
        <span
          onClick={() => setSortPopupIsOpen(!sortPopupIsOpen)}
          className="text-primary font-bold flex items-center cursor-pointer select-none"
        >
          {selectedSort}{' '}
          <IoIosArrowDown
            className={`ml-1 transition-all duration-300 ${sortPopupIsOpen && '-rotate-180'}`}
          />
        </span>
      </span>
      <div
        className={`absolute top-7 z-20 bg-white transition-all duration-300 ${sortPopupIsOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        <ul className="border text-sm">
          {sortList.map((item) => (
            <li
              key={item.id}
              className={`pr-5 pl-[10px] py-[10px] cursor-pointer  ${selectedSort === item.title ? 'bg-[#f6f6f6]' : 'hover:bg-[#f6f6f6]'}`}
              onClick={() => selectSort(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;

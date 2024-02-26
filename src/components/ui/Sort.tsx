import { IoIosArrowDown } from 'react-icons/io';

const Sort = () => {
  return (
    <div className="sort mb-[45px] flex justify-end relative">
      <span className="text-[15px] flex gap-1">
        Сортировать по:{' '}
        <span className="text-primary font-bold flex items-center">
          Цене <IoIosArrowDown />
        </span>
      </span>
      <div className="absolute top-7 z-2 bg-white">
        <ul className="border text-sm">
          <li className="px-[20px] py-[10px] cursor-pointer hover:bg-[#f6f6f6]">Популярности</li>
          <li className="px-[20px] py-[10px] cursor-pointer hover:bg-[#f6f6f6]">Цене</li>
          <li className="px-[20px] py-[10px] cursor-pointer hover:bg-[#f6f6f6]">Алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;

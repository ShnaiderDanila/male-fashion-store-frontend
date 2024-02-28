import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const categories = [
  { id: 0, name: 'Все' },
  { id: 1, name: 'Обувь' },
  { id: 2, name: 'Одежда' },
  { id: 3, name: 'Аксессуары' },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [categoryListIsOpen, setCategoryListIsOpen] = useState(false);

  return (
    <div>
      <h6
        className="uppercase text-primary font-bold flex items-center justify-between w-[242px] cursor-pointer"
        onClick={() => setCategoryListIsOpen(!categoryListIsOpen)}
      >
        Категории <IoIosArrowDown className="text-[24px]" />
      </h6>

      <div
        className={`overflow-hidden transition-all duration-300 ${categoryListIsOpen ? 'h-[160px]' : 'h-0'} `}
      >
        <ul className={`pt-[10px] pb-[20px] flex flex-col gap-2 text-primary-light`}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`${category.id === selectedCategory && 'text-primary'}`}
            >
              <button
                onClick={() => setSelectedCategory(category.id)}
                className="hover:text-primary transition-all duration-200"
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

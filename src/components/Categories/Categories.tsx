import { ChangeEvent, FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCheckmarkSharp } from 'react-icons/io5';

interface CategoriesProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Categories: FC<CategoriesProps> = ({
  title,
  options,
  selectedOptions,
  handleCheckboxChange,
}) => {
  const [categoryListIsOpen, setCategoryListIsOpen] = useState(false);

  return (
    <div>
      <h6
        className="uppercase text-primary mb-3 font-bold flex items-center justify-between cursor-pointer"
        onClick={() => setCategoryListIsOpen(!categoryListIsOpen)}
      >
        {title}
        <IoIosArrowDown className="text-2xl" />
      </h6>

      <ul className={`flex flex-col gap-4 text-primary-light overflow-hidden`}>
        {options.map((option) => (
          <li
            key={option}
            className={`transition-all duration-300 flex items-center gap-3 ${categoryListIsOpen ? 'mt-0' : '-mt-12'}`}
          >
            <label
              className={`hover:text-primary cursor-pointer flex items-center gap-3 transition-all duration-300 w-full
              ${selectedOptions?.includes(option) && 'text-primary'}`}
            >
              <div className="min-w-4 min-h-4 bg-gray relative">
                {selectedOptions?.includes(option) && (
                  <IoCheckmarkSharp className="w-full absolute top-0 left-0 text-primary" />
                )}
              </div>

              <input
                type="checkbox"
                value={option}
                onChange={(e) => handleCheckboxChange(e)}
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

export default Categories;

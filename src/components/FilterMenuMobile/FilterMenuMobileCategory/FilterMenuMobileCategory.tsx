import { ChangeEvent, FC, useState } from 'react';
import ModalMenu from '../../ui/ModalMenu/ModalMenu';
import { IoCheckmark } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';
import { MdArrowForwardIos } from 'react-icons/md';

interface FilterMenuMobileCategoryProps {
  category: {
    title: string;
    options: string[];
  };
  selectedOptions: string[];
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterMenuMobileCategory: FC<FilterMenuMobileCategoryProps> = ({
  category,
  selectedOptions,
  handleCheckboxChange,
}) => {
  const [categoryMenuIsOpen, setCategoryMenuIsOpen] = useState(false);

  return (
    <>
      <li className={'flex items-center gap-3 border-b border-gray'}>
        <button
          onClick={() => setCategoryMenuIsOpen(!categoryMenuIsOpen)}
          type="button"
          className="py-4 w-full flex justify-between items-center gap-4"
        >
          <span>{category.title}</span>
          <MdArrowForwardIos />
        </button>
      </li>
      {categoryMenuIsOpen && (
        <ModalMenu
          title={category.title}
          visible={categoryMenuIsOpen}
          setVisible={setCategoryMenuIsOpen}
          CloseIcon={IoArrowBack}
        >
          <ul className="overflow-auto">
            {category.options.map((option, index) => (
              <li key={index} className={'flex items-center gap-3 border-b border-gray'}>
                <div className="min-w-4 min-h-4 bg-gray relative">
                  {selectedOptions?.includes(option) && (
                    <IoCheckmark className="w-full absolute top-0 left-0 text-primary" />
                  )}
                </div>
                <label className="flex items-center gap-3 py-4">
                  <input
                    type="checkbox"
                    value={option}
                    onChange={(e) => handleCheckboxChange(e)}
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

export default FilterMenuMobileCategory;

import Categories from '../../Categories/Categories';
import { ChangeEvent, FC } from 'react';

interface ProductsFilterProps {
  categories: {
    title: string;
    options: string[];
  }[];
  selectedOptions: string[];
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ProductsFilter: FC<ProductsFilterProps> = ({
  categories,
  selectedOptions,
  handleCheckboxChange,
}) => {
  return (
    <aside className="hidden lg:flex flex-col min-w-56 gap-3">
      {categories.map((category) => (
        <Categories
          key={category.title}
          title={category.title}
          options={category.options}
          selectedOptions={selectedOptions}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </aside>
  );
};

export default ProductsFilter;

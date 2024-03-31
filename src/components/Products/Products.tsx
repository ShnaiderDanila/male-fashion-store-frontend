import { ChangeEvent, FC, useMemo, useState } from 'react';

import ProductsSort from './ProductsSort/ProductsSort';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import ProductList from './ProductsList/ProductList';
import ProductsSearchInput from './ProductsSearchInput/ProductsSearchInput';
import SortMenuMobile from '../SortMenuMobile/SortMenuMobile';
import FilterMenuMobile from '../FilterMenuMobile/FilterMenuMobile';
import Container from '../ui/Container/Container';

import { products } from '../../assets/products.json';
import { sortProducts } from '../../utils/functions/sortProducts';
import { filterBySearchQuery } from '../../utils/functions/filterBySearchQuery';
import { useDebounce } from '../../hooks/useDebounce';
import { TProduct } from '../../types/entities/product-entity';

const categories = [
  {
    title: 'Категории',
    options: [...new Set(products.map((product) => product.type))],
  },
  {
    title: 'Бренды',
    options: [...new Set(products.map((product) => product.brand))],
  },
  {
    title: 'Размер',
    options: [...new Set(products.map((product) => product.availableSize).flat())],
  },
  {
    title: 'Цвет',
    options: [...new Set(products.map((product) => product.color))],
  },
];

interface ProductsProps {
  products: TProduct[] | undefined;
}

const Products: FC<ProductsProps> = ({ products }) => {
  const [selectedSortItem, setSelectedSortItem] = useState('По умолчанию');

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const [searchQuery, setSearchQuery] = useState('');

  const debounced = useDebounce(searchQuery);

  const sortedProducts = useMemo(
    () => sortProducts(selectedSortItem, products),
    [selectedSortItem, products],
  );

  const sortedAndSearchedProducts = useMemo(
    () => filterBySearchQuery(debounced, sortedProducts),
    [debounced, sortedProducts],
  );

  const selectSort = (sortItem: string) => {
    setSelectedSortItem(sortItem);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    }
  };

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col gap-5 fixed z-[40] bg-white w-full top-20 left-0 lg:mb-16 lg:static pt-5 ">
          <ProductsSearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ProductsSort selectedSortItem={selectedSortItem} selectSort={selectSort} />
          <div className="flex justify-around lg:hidden">
            <SortMenuMobile selectedSortItem={selectedSortItem} selectSort={selectSort} />
            <FilterMenuMobile
              categories={categories}
              selectedOptions={selectedOptions}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className="flex justify-between gap-10 pt-20 lg:pt-0">
          <ProductsFilter
            categories={categories}
            selectedOptions={selectedOptions}
            handleCheckboxChange={handleCheckboxChange}
          />
          <div>
            <ProductList products={sortedAndSearchedProducts} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;

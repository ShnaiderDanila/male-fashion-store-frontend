import { FC, useMemo, useState } from 'react';

import { sortProducts } from '../../utils/functions/sortProducts';
import { filterBySearchQuery } from '../../utils/functions/filterBySearchQuery';
import { useDebounce } from '../../hooks/useDebounce';
import { TProduct } from '../../types/entities/product-entity';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { filterProducts } from '../../utils/functions/filterProducts.ts';

import ProductsSort from './ProductsSort/ProductsSort';
import ProductList from './ProductsList/ProductList';
import ProductsSearchInput from './ProductsSearchInput/ProductsSearchInput';
import Container from '../ui/Container/Container';
import SortMenuMobile from '../SortMenuMobile/SortMenuMobile';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import ProductsFilterMobile from './ProductsFilterMobile/ProductsFilterMobile';

interface ProductsProps {
  products: TProduct[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debounced = useDebounce(searchQuery);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedSortItem, setSelectedSortItem] = useState('По умолчанию');

  const selectedFilterOptions = useAppSelector(
    (state: RootState) => state.filterReducer.selectedFilterOptions,
  );

  const selectSort = (sortItem: string) => {
    setSelectedSortItem(sortItem);
  };

  const sortedProducts = useMemo(
    () => sortProducts(selectedSortItem, products),
    [selectedSortItem, products],
  );

  const sortedAndFilteredProducts = useMemo(
    () => filterProducts(sortedProducts, selectedFilterOptions),
    [sortedProducts, selectedFilterOptions],
  );

  const searchedProducts = useMemo(() => {
    setCurrentPage(1);
    return filterBySearchQuery(debounced, sortedAndFilteredProducts);
  }, [debounced, sortedAndFilteredProducts, setCurrentPage]);

  return (
    <section className="pb-24 pt-20 lg:pt-10">
      <Container>
        <div className="flex flex-col gap-5 fixed z-[40] bg-white w-full top-20 left-0 lg:mb-12 lg:static pt-5 ">
          <ProductsSearchInput
            searchQuery={debounced}
            setSearchQuery={setSearchQuery}
            sortedAndSearchedProducts={sortedAndFilteredProducts}
          />
          <ProductsSort selectedSortItem={selectedSortItem} selectSort={selectSort} />
          <div className="flex justify-around lg:hidden">
            <SortMenuMobile selectedSortItem={selectedSortItem} selectSort={selectSort} />
            <ProductsFilterMobile />
          </div>
        </div>
        <div className="flex gap-10 pt-20 lg:pt-0">
          <ProductsFilter />
          <ProductList
            products={searchedProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Container>
    </section>
  );
};

export default Products;

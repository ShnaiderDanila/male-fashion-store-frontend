import { ProductsCategories } from './../../utils/enums/productCategories';
import {
  TFilterCategory,
  TProduct,
  TSelectedFilterOptions,
} from './../../types/entities/product-entity';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  filterCategories: TFilterCategory[];
  selectedFilterOptions: TSelectedFilterOptions;
}

const initialState: FilterState = {
  filterCategories: [],
  selectedFilterOptions: {
    type: [],
    brand: [],
    size: [],
    color: [],
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterCategories: (state, action: PayloadAction<TProduct[]>) => {
      const categories = [
        {
          title: 'Вид товара',
          value: ProductsCategories.type,
          options: [...new Set(action.payload.map((product) => product.type))],
        },
        {
          title: 'Бренд',
          value: ProductsCategories.brand,
          options: [...new Set(action.payload.map((product) => product.brand))],
        },
        {
          title: 'Размер',
          value: ProductsCategories.size,
          options: [...new Set(action.payload.map((product) => product.availableSize).flat())],
        },
        {
          title: 'Цвет',
          value: ProductsCategories.color,
          options: [...new Set(action.payload.map((product) => product.color))],
        },
      ];

      state.filterCategories = categories;
    },

    toggleSelectedFilterOptions: (
      state,
      action: PayloadAction<{
        categoryTitle: string;
        value: keyof TSelectedFilterOptions;
        selectedOption: string;
      }>,
    ) => {
      const { value, selectedOption } = action.payload;

      const existOption = state.selectedFilterOptions[value].find(
        (option) => option === selectedOption,
      );

      if (existOption) {
        state.selectedFilterOptions[value] = state.selectedFilterOptions[value].filter(
          (option) => option !== selectedOption,
        );
      } else {
        state.selectedFilterOptions[value].push(selectedOption);
      }
    },

    removeAllSelectedFilters: (state) => {
      state.selectedFilterOptions = {
        type: [],
        brand: [],
        size: [],
        color: [],
      };
    },
  },
});

export const { addFilterCategories, toggleSelectedFilterOptions, removeAllSelectedFilters } =
  filterSlice.actions;
export default filterSlice.reducer;

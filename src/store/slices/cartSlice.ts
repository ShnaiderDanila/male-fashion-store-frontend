import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCartProduct } from '../../types/entities/product-entity';
import { findExistProduct } from '../../utils/functions/findExistProduct';
import { setLocalStorageItem } from '../../utils/functions/localStorageItem';

export interface CartState {
  totalPrice: number;
  totalCount: number;
  products: TCartProduct[];
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartState(state, action: PayloadAction<CartState>) {
      const { products, totalCount, totalPrice } = action.payload;
      state.products = products;
      state.totalCount = totalCount;
      state.totalPrice = totalPrice;
    },

    addProduct(state, action: PayloadAction<TCartProduct>) {
      const existProduct = findExistProduct(state, action.payload);

      if (existProduct) {
        existProduct.count++;
        state.totalCount++;
      } else {
        state.products.push(action.payload);
        state.totalCount++;
      }

      state.totalPrice = state.products.reduce((previousValue, product) => {
        return previousValue + Number(product.price) * product.count;
      }, 0);

      setLocalStorageItem('cart', {
        products: state.products,
        totalPrice: state.totalPrice,
        totalCount: state.totalCount,
      });
    },

    removeProduct(state, action: PayloadAction<TCartProduct>) {
      const existProduct = findExistProduct(state, action.payload);

      if (!existProduct) {
        return;
      }

      if (existProduct.count > 1) {
        existProduct.count--;
      } else {
        state.products = state.products.filter(
          (item) => !(item.id === action.payload.id && item.size === action.payload.size),
        );
      }

      state.totalPrice = state.products.reduce((previousValue, product) => {
        return previousValue + Number(product.price) * product.count;
      }, 0);

      state.totalCount--;

      setLocalStorageItem('cart', {
        products: state.products,
        totalPrice: state.totalPrice,
        totalCount: state.totalCount,
      });
    },

    removeAllProducts(state) {
      state.products = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      localStorage.removeItem('cart');
    },
  },
});

export const { setCartState, addProduct, removeProduct, removeAllProducts } = cartSlice.actions;
export default cartSlice.reducer;

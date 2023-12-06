import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (isExist) {
        isExist.quantity = isExist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

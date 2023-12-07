import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import { pokemonApi } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

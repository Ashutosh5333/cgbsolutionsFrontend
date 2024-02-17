import { AnyAction, configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart';
import wishlistSlice from './features/wishlist';
import formSlice from './features/formSlice';

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    wishlist:wishlistSlice,
    contact:formSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import productSlice from './productSlice'
import generalSlice from './generalSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        generals: generalSlice
    }
})
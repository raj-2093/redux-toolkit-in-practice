import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState = {
    data: [],
    status: "idle"
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builder)=>{
        builder.addCase(getProducts.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status = "idle"
        }).addCase(getProducts.pending, (state, action) => {
            state.status = "loading"
        }).addCase(getProducts.rejected, (state, action) => {
            state.status = "error"
        })
    }
})

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async ()=>{
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json()
    return result;
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch("https://fakestoreapi.com/products");
//         const result = await data.json()
//         dispatch(fetchProducts(result))
//     }
// }
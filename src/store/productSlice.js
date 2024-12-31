import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { data } from "react-router-dom";
import { addProductApi, getAllProductsApi } from "../apis/fakeRestApis";

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
        .addCase(addProduct.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.status = "idle"
        })
    }
})

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', getAllProductsApi)
export const addProduct = createAsyncThunk('products/post', async (product)=>{
    console.log(`rj_ product - ${product}`)
    const returnedProduct = await addProductApi(product)
    return {...returnedProduct, id: nanoid()}
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch("https://fakestoreapi.com/products");
//         const result = await data.json()
//         dispatch(fetchProducts(result))
//     }
// }
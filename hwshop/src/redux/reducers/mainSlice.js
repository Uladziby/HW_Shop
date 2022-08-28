import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/api";


const initialState = {
    products: [],
    loading : false,
}


export const fetchProducts = createAsyncThunk(
    'mainSlice/fetchProducts',
    async (limit, { rejectWithValue }) => {
        try {
            const resp = getAllProducts(limit);
            console.log(resp)
            return resp
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }

)

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = [...state.products, ...action.payload];
        }
    },
    extraReducers : {
        [fetchProducts.pending] : (state)=>{
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action)=>{
            state.loading = false;
            state.products = action.payload
        }
    }
})

export default mainSlice.reducer;
export const { setProducts } = mainSlice.actions 
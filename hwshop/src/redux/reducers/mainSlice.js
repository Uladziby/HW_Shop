import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/api";


const initialState = {
    products: [],
    loading: false,
    showNotificationMsg: false,
    isShowModalLogin: false,
}


export const fetchProducts = createAsyncThunk(
    'mainSlice/fetchProducts',
    async (limit, { rejectWithValue }) => {
        try {
            const resp = getAllProducts(limit);
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
        notifyLogin(state, { payload }) {
            state.showNotificationMsg = payload;
        },
        showModalLogin(state, { payload }) {
            state.isShowModalLogin = payload;
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.products = payload;
        },
        [fetchProducts.rejected]: (state) => {
            state.loading = false;
        }
    }
})

export default mainSlice.reducer;
export const { setProducts, notifyLogin, showModalLogin, setLimitOnPage } = mainSlice.actions 
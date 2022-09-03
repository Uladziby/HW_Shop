import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_url, getAllProducts} from "../../api/api";


const initialState = {
    products: [],
    loading: false,
    showNotificationMsg: false,
    isShowModalLogin: false,
    detailInfo : {},
    error : '',
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

export const fetchProductById = createAsyncThunk(
    'mainSlice/fetchProductById',
    async (id, { rejectWithValue }) => {
        try {
            const resp = await fetch(`${base_url}/${id}`);
            return await resp.json();
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
        [fetchProducts.rejected]: (state,{payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [fetchProductById.pending]: (state) => {
            state.loading = true;
        },
        [fetchProductById.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.detailInfo = payload;
        },
        [fetchProductById.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },

    }
})

export default mainSlice.reducer;
export const { notifyLogin, showModalLogin} = mainSlice.actions 
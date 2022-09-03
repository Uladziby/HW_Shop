import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowModalCart: false,
    items: [],
    totalPrice: 0,
    amountItems: 0,
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        showModalCart(state) {
            state.isShowModalCart = true;
        },
        closeModalCart(state) {
            state.isShowModalCart = false;
        },
        addItem(state, { payload }) {
            const existItem = state.items.find((el) => el.id === payload.id);
            if (existItem) {
                existItem.amount += payload.amount;
            } else {
                state.items = [...state.items, payload];
            }

            state.totalPrice += payload.price * payload.amount;
            state.amountItems += payload.amount;
        },
        removeItem(state, { payload }) {
            const removedItem = state.items.find(item => item.id === payload);
            state.amountItems -= removedItem.amount;
            state.totalPrice -= (removedItem.amount * removedItem.price);

            state.items = state.items.filter(item => item.id !== payload);
        },
        increaseAmount(state, { payload }) {
            state.items.map((el) => {
                if (el.id === payload) {
                    el.amount++;
                    state.totalPrice += el.price;
                    state.amountItems++;
                }
            })
        },
        reduceAmount(state, { payload }) {
            state.items.map((el) => {
                if (el.id === payload) {
                    if (el.amount) {
                        el.amount--;
                        state.totalPrice -= el.price;
                        state.amountItems--;
                    }
                }
            })
        },
        clearCart(state) {
            state.items = [];
            state.amountItems = 0;
            state.totalPrice = 0;
        }
    },
})

export default cartSlice.reducer;
export const {
    showModalCart,
    closeModalCart,
    addItem,
    removeItem,
    increaseAmount,
    reduceAmount,
    clearCart } = cartSlice.actions 
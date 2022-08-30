import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowModalCart: false,
    items: [{
        amount: 1,
        category: "men's clothing",
        description: "Slim-fitting style, contrast raglan long sleeve.",
        id: 2,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        price: 22.3,
        title: "Mens Casual Premium Slim Fit T-Shirts "
    }],
    totalPrice: 22.3,
    amountItems: 1,
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
            let isExistItem = false;
            if (state.items.length === 0) {
                state.items = [...state.items, payload];
            }
            else {
                state.items.map((el) => {
                    if (el.id === payload.id) {
                        el.amount += payload.amount;
                        isExistItem = true;
                    }
                })
                if (!isExistItem) {
                    state.items = [...state.items, payload];
                }
            }
            state.totalPrice += payload.price * payload.amount;
            state.amountItems += payload.amount;
        },
        removeItem(state, { payload }) {
            state.items = state.items.filter(item => item.id !== payload);
            state.amountItems = 0;
            state.totalPrice = 0;
            state.items.map(el => {
                state.amountItems += el.amount;
                state.totalPrice += (el.amount * el.price);
            });
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
                    el.amount--;
                    state.totalPrice -= el.price;
                    state.amountItems--;
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
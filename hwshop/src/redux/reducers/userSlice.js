import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    password: "",
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        login(state, { payload }) {
            state.name = payload.name;
            state.password = payload.password;
        },
        logout(state) {
            state.name = '';
            state.password = "";
        },
    },
})

export default userSlice.reducer;
export const { login, logout } = userSlice.actions; 
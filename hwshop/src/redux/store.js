import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice'
import mainSlice from './reducers/mainSlice'
import userSlice from './reducers/userSlice'


const rootReducer = combineReducers({
    main : mainSlice,
    cart : cartSlice,
    user: userSlice,
})

export default configureStore({
  reducer: rootReducer,
})
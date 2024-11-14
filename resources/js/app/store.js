import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import FilterSlice from '@/features/Filter/FilterSlice'
import { filterApi } from '@/features/Filter/filterApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import calculatorSlice from '@/features/calculatorSlice'
import orderSlice from '@/features/orderSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    filters:FilterSlice,
    calculatorSlice:calculatorSlice,
    orderSlice:orderSlice,
    [filterApi.reducerPath]: filterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filterApi.middleware),
})

setupListeners(store.dispatch)



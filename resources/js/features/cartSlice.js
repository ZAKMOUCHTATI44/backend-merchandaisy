import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    cart:JSON.parse(localStorage.getItem('cart')) || [],
    showPanier:false
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state,action){
        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        if(itemInCart) {
            itemInCart.qteCart+= action.payload.qteCart ?? 1 ;
        }else {
            state.cart.push({...action.payload,qteCart:action.payload.qteCart ?? 1})
        }
        state.showPanier=true;
        localStorage.setItem('cart',JSON.stringify(state.cart))
        axios.post('/shop_carts',action.payload)
    },
    removeProduct(state,action){
        state.cart.splice(state.cart.findIndex((arrow) => arrow.id === action.payload), 1);
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    updateQte(state,action){
        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        if(itemInCart) {
            itemInCart.qteCart = action.payload.count ?? 1 ;
        }
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    decQte(state,action) {
        const itemInCart = state.cart.find((item) => item.id === action.payload);
        if(itemInCart) {
            itemInCart.qteCart--;
        }
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    incQte(state,action) {
        const itemInCart = state.cart.find((item) => item.id === action.payload);
        if(itemInCart) {
            itemInCart.qteCart++;
        }
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    closeCart(state){
        state.showPanier=false
    },
    openCart(state){
        state.showPanier=true
    },
    clearAllProduct(state){
        state.cart=[]
        localStorage.removeItem('cart')
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart , removeProduct , updateQte, decQte , incQte,closeCart,openCart , clearAllProduct } = cartSlice.actions;
export default cartSlice.reducer;

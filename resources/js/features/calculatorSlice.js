import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:{},
    errors:{}
}

const calculatorSlice=createSlice({
    name:"caluclator",
    initialState,
    reducers:{
        setData(state,action){
            state.data= {...state.data,...action.payload};
        },
        setErrors(state,action){
            state.errors= {...state.errors,...action.payload};
        },
        clearObj(state){
            state.errors={}
        }

    }

})
export const { setData , setErrors , clearObj } = calculatorSlice.actions
export default calculatorSlice.reducer

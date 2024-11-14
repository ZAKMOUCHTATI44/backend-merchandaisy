import { createSlice } from "@reduxjs/toolkit";

const initialState={
    info: JSON.parse(localStorage.getItem('info')),
    errors:{},
}

const orderSlice= createSlice({
    name:"orderSlice",
    initialState,
    reducers:{
        addInfo(state,action){
            state.info= {...state.info,...action.payload};
        },
        addErrors(state,action){
            state.errors= action.payload;
        },
        setNull(state) {
            state.info={}
        }
    }
})

export const { addInfo,addErrors, setNull } = orderSlice.actions;
export default orderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    filters:{
        name:'',
        price: [0,200],
        categories:[],
        plans:[],
        limit:6,
        skip:0,
        page:1
    }
}

const filterSlice=createSlice({
    name:"filter",
    initialState,
    reducers:{
        setFilters(state,action) {
            state.filters= {...state.filters,...action.payload};
        },
        setPageInc(state){
            console.log("Heyy")
            state.filters.page+=1;
        },
        setPageDec(state){
            console.log(state)
            state.filters.page-=1;
        }
    }
})

export const { setFilters , setPageInc , setPageDec  } = filterSlice.actions

export default filterSlice.reducer

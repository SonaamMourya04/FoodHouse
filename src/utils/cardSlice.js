import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[1,2]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItems:(state,action) =>{
            state.items.filter(item => item.id !== action.payload);
        },
        clearCart:(state) =>{
            state.items.length=0;
        },
    },
});
export const{addItem,removeItems,clearCart}=cartSlice.actions;
 export default cartSlice.reducer;
 
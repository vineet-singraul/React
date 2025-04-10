import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"mycart",

    initialState:{
        cart : []
    },

    reducers:{
        addtoCard:(state , actions)=>{
            state.cart.push(actions.payload)
             console.log(actions.payload);
             
        }
    }
})

export const  {addtoCard} = cartSlice.actions
export default cartSlice.reducer
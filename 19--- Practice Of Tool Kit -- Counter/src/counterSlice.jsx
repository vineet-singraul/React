import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    
    name:'counter',

    initialState: {
       value : 12
    },

    reducers : {
         increment : state => {
            state.value += 1
         },
         decrement : state =>{
           state.value -= 1
         },
         setData(state ,actions){
             state.value = Number(actions.payload)
         }
    }
})
export const {increment , decrement , setData} = counterSlice.actions
export default counterSlice.reducer
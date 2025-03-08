import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({

    name :'color',

    initialState : {
        color : 'red',
    },

    reducers : {
        changeColor : state => {
            state.color = 'black'
        },

        setColorAll(state , actions){
            state.color = actions.payload
        }
    }
})

export const { changeColor , setColorAll} = colorSlice.actions;
export default colorSlice.reducer;
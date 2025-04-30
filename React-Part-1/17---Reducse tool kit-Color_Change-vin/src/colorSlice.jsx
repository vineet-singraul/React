import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: "color",
    initialState: {
        color: "pink",
    },
    reducers: {
        setColorButton : state =>{
            state.color = 'black'
        },
        
        setEnterColor(state , actions){
            state.color = actions.payload
        }
    },
});

export default colorSlice.reducer;
export const {setColorButton , setEnterColor} = colorSlice.actions
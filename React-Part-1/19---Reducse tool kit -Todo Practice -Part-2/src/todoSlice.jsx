import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todoTask",
    initialState: {
        todoTask: []
    },
    reducers: {
        addItems(state, actions) {
            state.todoTask.push({ Task: actions.payload, id: new Date().getTime().toString(), status: "Incomplete" });
        },

        deleteIcon(state, actions) {
            state.todoTask = state.todoTask.filter((key) => key.id !== actions.payload.id);
        },

        completeChange(state, actions) {
            for (let i = 0; i < state.todoTask.length; i++) {
                if (state.todoTask[i].id === actions.payload.id) {
                    state.todoTask[i].status = state.todoTask[i].status === "Complete" ? "Incomplete" : "Complete";
                    break; 
                }
            }
        }
    },
});

export const { addItems, deleteIcon, completeChange } = todoSlice.actions;
export default todoSlice.reducer;
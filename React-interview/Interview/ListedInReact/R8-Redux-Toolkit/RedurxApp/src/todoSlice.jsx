import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "mytodo",

  initialState: {
    todos: []
  },

  reducers: {
    addTodo: (state, action) => {
        state.todos.push(action.payload);
    },
    deleteTask: (state, action) => {
        state.todos = state.todos.filter(todo=> todo.id !== action.payload.id)
    }
  }
});

export const { addTodo,deleteTask } = todoSlice.actions;
export default todoSlice.reducer;

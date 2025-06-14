import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // console.log(action.payload);
      state.push(action.payload);
    },

    removeTask: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    },

taskComplite: (state, action) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i].id === action.payload.id) {
      state[i].states = "completed";  // ✅ mark as completed
      break; // optional: exit the loop after updating
    }
  }
}


  },
});

export const { addTodo,removeTask,taskComplite } = todoSlice.actions;
export default todoSlice.reducer;

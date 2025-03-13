import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoTask",

  initialState: {
    todoTask: [],
  },

  reducers: {
    addItems(state, action) {
      state.todoTask.push({
        Task: action.payload,
        Id: new Date().getTime(),
        status: "Incomplete",
      });
    },

    DeleteTask(state, action) {
      state.todoTask = state.todoTask.filter((key) => key.Id !== action.payload.id);
    },

    taskComplete(state, action) {
        var count = 0;
        for (var i = 0; i < state.todoTask.length; ++i) {
            if (state.todoTask[i].Id === action.payload.id) {
                if (count === 0 && state.todoTask[i].status === "Incomplete") {
                    count++;
                    state.todoTask[i].status = "Complete";
                } else if (count === 1 && state.todoTask[i].status === "Complete") {
                    count--;
                    state.todoTask[i].status = "Incomplete";
                }
            }
        }
    }
    

  },
});

export default todoSlice.reducer;
export const { addItems, DeleteTask, taskComplete } = todoSlice.actions;

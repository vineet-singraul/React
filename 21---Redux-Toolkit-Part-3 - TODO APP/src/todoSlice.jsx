// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//     name: "mytodo",
//     initialState: {
//         task: []
//     },
//     reducers: {
//         addTask: (state, actions) => {
//             console.log(actions.payload);
//             state.task.push(actions.payload);
//         },
//         deleteTask: (state, actions) => {
//             state.task = state.task.filter(key => key.id !== actions.payload.id);
//         },
//         taskComplete: (state, actions) => {
//             for (let i = 0; i < state.task.length; ++i) {
//                 if (state.task[i].id === actions.payload.id) {
//                     state.task[i].status = "Complete";
//                 }
//             }
//         },
//         taskIncomplete: (state, actions) => {
//             for (let i = 0; i < state.task.length; ++i) {
//                 if (state.task[i].id === actions.payload.id) {
//                     state.task[i].status = "Incomplete";
//                 }
//             }
//         }
        
//     }
// });

// export const { addTask, deleteTask , taskComplit} = todoSlice.actions;
// export default todoSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "mytodo",
    initialState: {
        task: []
    },
    reducers: {
        addTask: (state, actions) => {
            console.log(actions.payload);
            state.task.push(actions.payload);
        },
        deleteTask: (state, actions) => {
            state.task = state.task.filter(key => key.id !== actions.payload.id);
        },
        taskComplete: (state, actions) => {
            state.task = state.task.map(task =>
                task.id === actions.payload.id ? { ...task, status: "Complete" } : task
            );
        },
        taskIncomplete: (state, actions) => {
            state.task = state.task.map(task =>
                task.id === actions.payload.id ? { ...task, status: "Incomplete" } : task
            );
        }
    }
});

export const { addTask, deleteTask, taskComplete, taskIncomplete } = todoSlice.actions;
export default todoSlice.reducer;

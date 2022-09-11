import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks: []
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action)=>{
            state.tasks=[action.payload.task, ...state.tasks]
        },
        completeTask: (state, action)=>{
            const toggleTodo = state.tasks.find((item)=>item.id===action.payload);
            toggleTodo.completed = !toggleTodo.completed;
        },
        removeTask: (state, action) =>{
            console.log(action.payload)
        state.tasks = state.tasks.filter((item)=>item.id !== action.payload)
        console.log(state.tasks)

        }
    }
})
export const {addTask, completeTask, removeTask} = todoSlice.actions
export default todoSlice.reducer
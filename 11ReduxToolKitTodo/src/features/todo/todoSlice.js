import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos: [{id:1, text:"Task done"}]
}
//A slice groups the state, actions, and reducers for a specific feature (todo in this case).
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

//reducer kya hai kuch nhi bas ek functionality hai.
import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: 1, title: "Play Cricket", completed: true },
    { id: 2, title: "Play table", completed: false },
];

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => [...state, action.payload],
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        toggleCompleted: (state, action) => {
            state.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
            });
        }
    }
});

export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;

export default todosSlice.reducer;
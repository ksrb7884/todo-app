import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodosList from './TodosList';

function TodoApp() {
    return (
        <>
            <AddTodoForm />
            <TodosList />
        </>
    );
}

export default TodoApp;
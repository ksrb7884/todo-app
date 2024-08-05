import React from 'react';
import SingleTodo from './SingleTodo';
import { useSelector } from 'react-redux';

function TodosList() {
    const todo = useSelector((state) => state.todos);
    return (
        <div>
            {todo && todo.map((todo) => <SingleTodo {...todo} key={todo.id} />)}
        </div>
    );
}

export default TodosList;
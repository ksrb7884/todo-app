import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompleted } from './todosSlice';

function SingleTodo({ id, title, completed }) {
    const dispatch = useDispatch();
    return (
        <div className='m-1 p-1 b-2'>
            <p >Id:{id}</p>
            <p className={completed ? "strike" : ""}>Title:{title}</p>
            <p >Completed:{completed ? "true" : "false"}</p>
            <button onClick={() => dispatch(removeTodo({ id: id }))}>Delete</button>
            <button onClick={() => dispatch(toggleCompleted({ id: id }))}>Completed</button>

        </div>
    );
}

export default SingleTodo;
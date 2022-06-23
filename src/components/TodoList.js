import React from 'react';

const TodoList = () => {
    return (
        <div>
            <div className='header text-center'>
                <h3>Todo List</h3>
                <button className="btn btn-primary">Create Task</button>
            </div>
            <div className='task-container'>

            </div>
        </div>
    );
};

export default TodoList;
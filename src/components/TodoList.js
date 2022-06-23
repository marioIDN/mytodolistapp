import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem('taskList')
        if(arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj);
        }
    }, []);

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObjek) => {
        let tempList = taskList
        tempList.push(taskObjek)
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    return (
        <div>
            <div className='header text-center'>
                <h3>Todo List</h3>
                <button className="btn btn-primary" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className='task-container'>
                {taskList && taskList.map((obj, index) => <Card taskObjek = {obj} index = {index}/>)}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask} />
        </div>
    );
};

export default TodoList;
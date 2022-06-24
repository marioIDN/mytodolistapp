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

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList 
        tempList[index] = obj
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload();
    }

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
                <h3>Mau melakukan apa hari ini ?</h3>
                <button className="btn btn-outline-info btn-create" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className='task-container container container-fluid'>
                {taskList && taskList.map((obj, index) => <Card taskObjek = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/>)}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask} />
        </div>
    );
};

export default TodoList;
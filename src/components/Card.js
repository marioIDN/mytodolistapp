import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
const Card = ({taskObjek, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5d93e1",
            secondaryColor : "ecf3fc"
        },
        {
            primaryColor : "#f9d288",
            secondaryColor : "fefaf1"
        },
        {
            primaryColor : "#f48687",
            secondaryColor : "fdf1f1"
        },
        {
            primaryColor : "#b964f7",
            secondaryColor : "f3f0fd"
        },
        {
            primaryColor : "#fffd7b",
            secondaryColor : "fffb00"
        }
    ];

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () =>{
        deleteTask(index);
    }
    return (
            <div className='card-wrapper'>
                <div className='card-top' style={{'background-color': colors[index%5].primaryColor}}></div>
                <div className='task-holder'>
                    <span className='card-header' style={{'border-bottom':'1px solid grey'}}>{taskObjek.Name}</span> 
                    <p style={{'margin-top': '10px'}}>{taskObjek.Description}</p>
                    <div style={{'position': 'absolute', 'right': '20px', 'bottom': '20px'}}>
                        <i className='far fa-edit' style={{'color': '#2c56ff', 'margin-right':'1em', 'cursor': 'pointer'}} onClick = {() => setModal(true)}></i>
                        <i className='fas fa-trash-alt' style={{'color': '#e20000', 'cursor': 'pointer'}} onClick = {handleDelete}></i>
                    </div>
                </div>
                <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObjek = {taskObjek}/>
            </div>
    );
};

export default Card;
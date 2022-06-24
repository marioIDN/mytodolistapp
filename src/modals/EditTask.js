import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const  EditTask = ({ modal, toggle, updateTask, taskObjek }) => {
    const [taskName, setTaskName] = useState(' ');
    const [description, setDescription] = useState(' ');

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === 'taskName') {
            setTaskName(value)
        }else {
            setDescription(value)
        }
    }

    useEffect(() => {
        setTaskName(taskObjek.Name)
        setDescription(taskObjek.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObjek = {}
        tempObjek['Name'] = taskName
        tempObjek['Description'] = description
        updateTask(tempObjek);
    }

    return (
        <Modal isOpen={modal} modal={modal}>
            <ModalHeader toggle={toggle}>
                Update Task
            </ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-input'>
                        <label>Task Name</label>
                        <input type='text' className='form-control' value={taskName} onChange = {handleChange} name='taskName' />
                    </div>
                    <br></br>
                    <div className='form-input'>
                        <label>Description</label>
                        <textarea rows='5' className='form-control' value={description} onChange = {handleChange} name='description' />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button className='btn-modal' color="primary" onClick={handleUpdate}>
                    Update
                </Button>
                {' '}
                <Button className='btn-modal' onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditTask;
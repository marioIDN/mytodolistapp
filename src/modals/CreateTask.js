import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const  CreateTask = ({ modal, toggle, save }) => {
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

    const handleSave = () => {
        let taskObjek = {}
        taskObjek["Name"] = taskName
        taskObjek["Description"] = description
        save(taskObjek)
    }

    return (
        <Modal isOpen={modal} modal={modal}>
            <ModalHeader toggle={toggle}>
                Create Task
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
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>
                {' '}
                <Button onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateTask;
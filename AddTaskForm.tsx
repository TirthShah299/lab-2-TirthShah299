import { useState } from 'react';

type AddProps = {
    onAddTask: (title: string, tasks: string[]) => void;
};

const AddTaskForm = (props: AddProps) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskList, setTaskList] = useState<string[]>([]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setTaskTitle(e.target.value);
    };

    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //Taking the input fields string value and creating a new array using trim
        setTaskList(e.target.value.split(',').map(task => task.trim()));
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onAddTask(taskTitle, taskList);
        setTaskTitle('');
        setTaskList([]);
    };


    return (
        <form onSubmit={handleSubmit} className='add-form'>
            <fieldset>
                <legend>Add New Task</legend>
                <input
                    className='formField'
                    type='text'
                    value={taskTitle}
                    onChange={handleTitleChange}
                    placeholder='Enter Task Title'
                />
                <br></br>
                <input
                    className='formField'
                    type='text'
                    value={taskList}
                    onChange={handleTaskChange}
                    placeholder='Enter Task List'
                />
                <br></br>
                <input type='submit' value='Add Task' />

            </fieldset>
        </form>
    );
};

export default AddTaskForm;

import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        todo: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.todo)
        addTodo(formData.todo);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo:</label>
            <input
                id='todo'
                type='text'
                placeholder='Enter todo here'
                name='todo'
                value={formData.todo}
                onChange={handleChange} />
            <button>Enter</button>
        </form>
    )
}

export default NewTodoForm;
import React from 'react';

const Todo = ({ id, todo }) => {

    const handleClick = (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
    }
 return (
    <li key={id}>
        {todo}
        <button data-testid='delete-button' onClick={handleClick}>X</button>
    </li>
 )
}

export default Todo;
import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
    const INITIAL_STATE = [
        { id: uuid(), todo: 'Pet cat' }
    ]

    const [todos, setTodos] = useState(INITIAL_STATE);

    function addTodo(todo) {
        setTodos(todos => [...todos, {id: uuid(), todo }])
    }

    return (
        <div>
            <h3>Todos!!</h3>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todos.map(({ id, todo }) => <Todo
                    key={id}
                    todo={todo}
                />)}
            </ul>
        </div>
    )
}

export default TodoList;
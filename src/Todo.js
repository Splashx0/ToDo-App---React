import React, { useState, useRef } from 'react'
import './App.css';

const Todo = () => {
    const [addTodo, SetAddTodo] = useState([])

    const inputToDo = useRef(null);

    const HandleAdd = () => {
        SetAddTodo([...addTodo, inputToDo.current.value]);
        inputToDo.current.value = '';
    };

    const HandleDelete = () => {
        SetAddTodo([]);
    }

    const HandleSignleDelete = (elem) => {
        SetAddTodo(addTodo.filter((item) => {
            return item !== elem;
        }))
    }

    return (
        <div>
            <h1 className='title'>
                Todo App
            </h1>
            <input type='text' className='bar' placeholder='Add Your New Todo' ref={inputToDo} />
            <button className='AddBtn' onClick={HandleAdd}>ADD</button>

            {addTodo.map((todo, id) =>
            (
                <div key={id} className='elemnt-style'>
                    <div className='elem'>{todo}</div>
                    <button className='DelBtn' onClick={() => HandleSignleDelete(todo)}  >Done</button>
                </div>
            )
            )}

            <button className='ClearBtn' onClick={HandleDelete}>Clear All</button>

            <div className='pending'>You have {addTodo.length} Pending Tasks</div>


        </div>
    )
}
export default Todo
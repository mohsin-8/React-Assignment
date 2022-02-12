import React, { useState } from 'react';
import './Todo.css';

// react icons
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

const Todo = ({ title, section }) => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");
    const [indexVal, setIndexVal] = useState("");
    const [editInputVal, setEditInputVal] = useState("");

    console.log("value", value);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const addTodo = () => {
        if (value === "") {
            alert('Enter Proper Text');
        } else {
            // console.log(todos);
            setValue("");
            todos.push(value);
            setTodos([...todos]);
        }
    }

    const deleteAll = () => {
        setTodos([]);
    }

    const deleteTodo = (ind) => {
        console.log('delte', ind);
        todos.splice(ind, 1);
        setTodos([...todos]);
    }

    const editTodo = (ind) => {
        // console.log(ind);
        // const update = prompt('edit');
        // console.log(update);
        // todos.splice(ind, 1, update);
        // setTodos([...todos]);
        console.log(ind);
        setIndexVal(ind);
    }

    const updateValue = () => {
        console.log(editInputVal);
        todos.splice(indexVal, 1, editInputVal);
        setTodos([...todos]);
        setIndexVal('');
        setEditInputVal('');
    }
    console.log("todos", todos);

    return (
        <div className='container mt-4'>
            <h1 className='main_heading text-center'>{title}</h1>

            <div className='container py-5'>
                <input type="text" placeholder='Add a todo' value={value} className='form-control' onChange={handleChange} />

                <div className="container-fluid text-center mt-3">
                    <button className='btn btn-success' onClick={addTodo}>Add Todo</button>
                    <button className='btn btn-danger mx-3' onClick={deleteAll}>Delete Todo</button>
                </div>
            </div>

            <section className='container my-5'>
                <h3>{section}</h3> <hr />
                {
                    todos.map((val, ind) => {
                        {/* console.log(ind) */ }
                        return ind === indexVal ? (
                            <div key={ind} className='container d-flex justify-content-center'>
                                <input
                                    type="text"
                                    placeholder='update todo'
                                    value={editInputVal}
                                    className='form-control'
                                    onChange={(e) => setEditInputVal(e.target.value)}
                                />
                                <button className='btn btn-info' onClick={updateValue}>UPDATE</button>
                            </div>
                        ) : (
                            <div key={ind} className='container my-4 d-flex justify-content-between'>
                                <li className='mx-3 list'>{val}</li>
                                <span>
                                    <AiFillDelete size={25} color='red' onClick={() => deleteTodo(ind)} />
                                    <AiFillEdit className='mx-3' size={25} color='green' onClick={() => editTodo(ind)} />
                                </span>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Todo;
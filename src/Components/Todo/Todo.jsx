import React from 'react';
import './Todo.css';

const Todo = ({ title }) => {
    return (
        <div className='container'>
            <div className="intro my-5">
                <h1 className='text-center'>
                    {title}
                </h1>
            </div>

            <div className="container todos">
                <div className="card">
                    <form>
                        <input
                            type="text"
                            placeholder='Title'
                            className='form-control'
                        /> <br />
                        <input
                            type="text"
                            placeholder='Description'
                            className='form-control'
                        />
                        <br />
                        <button className='btn btn-success w-100'>Add Todo</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Todo;
import React, { useState, useEffect } from 'react';
import './Todo.css';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const Todo = ({ title }) => {
    const [istitle, setTitle] = useState("");
    const [isdesc, setDesc] = useState('');
    const [istodos, setTodos] = useState([]);

    const todoCollectionRef = collection(db, "todos")

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addDoc(todoCollectionRef, {
            title: istitle,
            desc: isdesc
        });
        // console.log(todoCollectionRef);

        setTitle("");
        setDesc("");

        // console.log("Title: " + istitle);
        // console.log("Description: " + isdesc);
    }

    const updateTodo = async (id, title, desc) => {
        const todoDoc = doc(db, "todos", id);
        const update = {
            title: prompt("Update title", title),
            desc: prompt("Update Description", desc),
        };

        await updateDoc(todoDoc, update);
    };

    const deleteTodo = async (id) => {
        const todoDoc = doc(db, "todos", id);
        await deleteDoc(todoDoc);
    }

    useEffect(() => {
        const getTodos = async () => {
            const data = await getDocs(todoCollectionRef);
            setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data);
        };
        getTodos();
    }, []);

    return (
        <div className='container'>
            <div className="intro my-5">
                <h1 className='text-center'>
                    {title}
                </h1>
            </div>

            <div className="container todos">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Title'
                            className='form-control'
                            value={istitle}
                            onChange={(e) => setTitle(e.target.value)}
                        /> <br />
                        <input
                            type="text"
                            placeholder='Description'
                            className='form-control'
                            value={isdesc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <br />
                        <button className='btn btn-success w-100'>Add Todo</button>
                    </form>
                </div>
            </div>
            <div className="container result_todos my-5">
                <h1>Your Saved Todos</h1>
                <hr />
                <div className="container">
                    {
                        istodos.map((value, ind) => {
                            return (
                                <div key={ind} className='card my-4'>
                                    <div>
                                        <div className='title'>
                                            <h3>Todo Title: </h3>
                                            <p>{value.title}</p>
                                        </div>

                                        <div className="desc">
                                            <h3>Todo Description: </h3>
                                            <p>{value.desc}</p>
                                        </div>
                                        <button className='btn btn-info' onClick={() => { updateTodo(value.id, value.title, value.desc) }}>Update Todo</button>
                                        <button className='btn btn-danger ms-3' onClick={() => { deleteTodo(value.id) }}>Delete Todo</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo;
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className='todo-app'>
            <TodoList title="React Application (REACT.JS)" />
        </div>
    );
}

export default App;
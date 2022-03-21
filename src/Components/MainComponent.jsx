import React, { useState, useRef } from 'react';
import UserCard from './UserCard';

const MainComponent = ({ title }) => {
    const [inputValue, setInputValue] = useState("");
    const inputElement = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        const searchValue = inputElement.current.value;
        // console.log(searchValue);

        setInputValue(searchValue);

        setInputValue("");
    };

    return (
        <div className='container my-5'>
            <h1 className='text-center py-3'>{title}</h1>

            <div className="main_input">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='enter profile name ✍️'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        ref={inputElement}
                    />
                </form>
            </div>

            <div className='my-5'>
                <UserCard inputValue={inputValue} />
            </div>
        </div>
    )
}

export default MainComponent;
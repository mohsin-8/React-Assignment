import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ title }) => {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const registered = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
                console.log(result.uid);
            })
            .catch((err) => {
                console.log(err);
            })

        setEmail("");
        setFullName("");
        setContact("");
        setPassword("");
    }

    return (
        <div className='signup d-flex justify-content-center align-items-center vh-100'>
            <div className="container">
                <div className="card">
                    <h3 className='text-center text-white pb-3'>{title}</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder='Enter Email Address'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br />
                        <input
                            type="text"
                            placeholder='Enter Full Name'
                            className='form-control'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        /><br />
                        <input
                            type="number"
                            placeholder='Enter Contact Number'
                            className='form-control'
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        /><br />
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='form-control'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button className='btn btn-success w-100' onClick={registered}>Register your account</button>
                    </form>

                    <div className='goToSignUp'>
                        <Link className='text-white' to="/">
                            if you have an account go to Login Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
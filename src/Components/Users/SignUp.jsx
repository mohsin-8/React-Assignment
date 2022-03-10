import React, { useEffect, useState } from 'react';
import "./SignUp.css";

import { auth } from '../../config/firebase';
import { db } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import Loader from '../Loader';
import Toast from '../Toast';

const SignUp = () => {
    const [isEmail, setEmail] = useState("");
    const [isFullName, setFullName] = useState("");
    const [isContact, setContact] = useState("");
    const [isPassword, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const dbReference = collection(db, "users");
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const handleSubmit = () => {
        setLoading(true);
        // console.log(isEmail, isFullName, isContact, isPassword);

        const userObj = {
            isEmail,
            isFullName,
            isContact
        };

        createUserWithEmailAndPassword(auth, isEmail, isPassword)
            .then(async (users) => {
                // console.log(users.user.uid);
                setLoading(false);
                toast("User Successfully Registered!!!");
                navigate("/");
                await addDoc(dbReference, { ...userObj, userUid: users.user.uid });
                localStorage.setItem("user", users.user.uid);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                toast("Error User can't register");
            });

        setEmail("");
        setFullName("");
        setContact("");
        setPassword("");
    }

    useEffect(() => {
        if (user) {
            navigate("/registration");
        };
    }, []);

    return (
        <div className='signup_bg_img d-flex justify-content-center align-items-center vh-100'>
            <div className="container">
                <div className="card">
                    <h2 className='text-center mb-3'>Registered your account</h2>
                    <div className="container">
                        <input
                            type="email"
                            placeholder='Enter Email Address'
                            className='form-control'
                            value={isEmail}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder='Enter Full Name'
                            className='form-control'
                            value={isFullName}
                            onChange={e => setFullName(e.target.value)}
                        />
                        <br />
                        <input
                            type="number"
                            placeholder='Enter Contact Number'
                            className='form-control'
                            value={isContact}
                            onChange={e => setContact(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='form-control'
                            value={isPassword}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <br />

                        {
                            isLoading ? (
                                <div className='text-center'>
                                    <Loader />
                                </div>
                            ) : (
                                <button className='btn btn-info w-100' onClick={handleSubmit}>Sign Up</button>
                            )
                        }

                        <br /> <br />
                        <div className='text-center'>
                            <Link className='text-white' to="/">
                                Already have a account? Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Toast />
        </div>
    )
}

export default SignUp;
import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import Toast from '../Toast';
import { toast } from 'react-toastify';

const SignIn = () => {
    const [isEmail, setEmail] = useState("");
    const [isPassword, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const handleSignIn = () => {
        setLoading(true);
        // console.log(isEmail, isPassword);

        signInWithEmailAndPassword(auth, isEmail, isPassword)
            .then((users) => {
                console.log(users);
                setLoading(false);
                toast("Successfully Sign In");
                navigate("todos");
                localStorage.setItem("user", users.user.uid);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast("Error User can't Sign In");
            });

        setEmail("");
        setPassword("");
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, []);

    return (
        <div className='signin_bg_img d-flex justify-content-center align-items-center vh-100'>
            <div className="container">
                <div className="card signin_card">
                    <h2 className='text-center mb-3'>Sign In</h2>
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
                                <button className='btn btn-info w-100' onClick={handleSignIn}>Sign In</button>
                            )
                        }

                        <br /> <br />
                        <div className='text-center'>
                            <Link className='text-white' to="/registration">
                                Do you have an account? Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Toast />
        </div>
    )
}

export default SignIn;
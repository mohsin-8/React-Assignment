import React, { useEffect, useState } from 'react';
import "./styles/Login.css";
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginAction({ email, password, name }));
        // console.log(email, password);

        navigate("home");
        localStorage.setItem("user", email, name);

        setEmail("");
        setPassword("");
        setName("");
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className="container">
                    <div className="card p-5">
                        <h2 className='text-center pb-3'>Login Page</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder='Enter Email Address'
                                className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <input
                                type="text"
                                placeholder='Enter Full Name'
                                className='form-control'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /> <br />
                            <input
                                type="password"
                                placeholder='Enter Password'
                                className='form-control'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <button className='btn btn-success w-100'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
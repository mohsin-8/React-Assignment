import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn({ title }) {
    return (
        <div className='signin d-flex justify-content-center align-items-center vh-100'>
            <div className="container">
                <div className="card">
                    <h3 className='text-center text-white pb-3'>{title}</h3>
                    <form>
                        <input
                            type="email"
                            placeholder='Enter Email Address'
                            className='form-control'
                        /><br />
                        <input
                            type="text"
                            placeholder='Enter Full Name'
                            className='form-control'
                        />
                        <br />
                        <button className='btn btn-success w-100'>Log In</button>
                    </form>
                    <div className='goToSignUp'>
                        <Link className='text-white' to="/signup">
                            if you have'nt an account register yourself
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
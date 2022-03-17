import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from "../store/actions/index";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const { userEmail, userName } = useSelector((state) => state.loginReducer);
    // console.log(userEmail, userPassword);

    const logout = () => {
        dispatch(logoutAction());
        navigate("/");
        localStorage.removeItem("user");
    };

    useEffect(() => {
        if (!user) {
            navigate("/");
        };
    });

    return (
        <>
            <div className="container my-5">
                <h1 className='text-center'>Home Page</h1>

                {userEmail && `Your Email: ${userEmail}`} <br />
                {userName && `your Full Name: ${userName}`}
                <br /><br />
                <button className='btn btn-danger' onClick={logout}>Log out</button>
            </div>
        </>
    )
}

export default Home;
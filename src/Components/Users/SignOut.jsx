import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    const [isLogOut, setLogOut] = useState(false);
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [isLogOut]);

    const signout = () => {
        localStorage.removeItem("user");
        setLogOut(true);
    };

    return (
        <div className='container my-3'>
            <button className='btn btn-danger' onClick={signout}>
                Log Out
            </button>
        </div>
    )
}

export default SignOut;
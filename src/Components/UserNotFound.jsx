import React from 'react';
import error from "../images/Error.gif";

const UserNotFound = () => {
    return (
        <div className='container text-center'>
            <img src={error} className='my-3' width="350px" alt="user not found" />
            <h2>User Not Found! enter valid name</h2>
        </div>
    )
}

export default UserNotFound;
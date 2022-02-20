import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// React icons
import { RiNetflixFill } from 'react-icons/ri';
const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bgImg">
            <div className="container text-center">
                <h1 className='text-white'>MOVIES & TV SERIES RATINGS</h1>
                <Link className='btn btn-light button w-100 py-3' to="/movies">FIND BEST MOVIES & TV SERIES <RiNetflixFill style={{ fontSize: '22px', paddingBottom: '2px', color: 'red' }} /></Link>
            </div>
        </div>
    )
}

export default Home;
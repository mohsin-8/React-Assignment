import React, { useState, useEffect } from 'react';
import './Movies.css';

// component
import Navbar from './Navbar';

const Movies = () => {
    const [movieData, setMovieData] = useState([]);
    const [movieName, setMovieName] = useState('');
    const [searchMovies, setSearchMovies] = useState('');

    const getMovieRequest = async (searchMovies) => {
        const url = `https://www.omdbapi.com/?s=${searchMovies}&apikey=11f1c381`;

        const response = await fetch(url);

        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovieData(responseJson.Search);
            console.log(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchMovies);
    }, [searchMovies]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovieName('');
    }

    const search = () => {
        setSearchMovies(movieName);
        console.log(movieName);
    }


    return (
        <div className='text-white bg-dark'>
            <Navbar />
            <div className="container my-5">
                <h1>
                    FIND BEST ACTION, HORROR, ANIMATED, SCI-FICTION, DRAMAS, COMEDY
                    MOVIES & TV SHOWS HERE!!!
                </h1>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Find Best Movies & TV Shows Ratings'
                        className='form-control my-3'
                        value={movieName}
                        onChange={(e) => setMovieName(e.target.value)}
                    />
                    <button className='btn btn-light button mb-2 w-100' onClick={search}>Search</button>
                </form>
            </div>

            {movieData.map((value, index) => (
                <div key={index} className="container my-5">
                    <div className="card py-3 d-flex justify-content-center align-items-center">
                        <img src={value.Poster} alt="" />
                        <h4 className='text-dark my-3'>{value.Title}</h4>
                        <h5 className='text-dark'>{value.Year}</h5>
                        <h5 className='text-dark'>imdb ID: {value.imdbID}</h5>
                        <h5 className='text-dark'>Type: {value.Type}</h5>
                    </div>
                </div>
            ))}

            <h4 className='text-center'>Developer: MOHSIN ALI KHAN</h4>
        </div>
    )
}

export default Movies;
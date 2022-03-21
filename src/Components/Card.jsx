import React from 'react';
import "./Card.css";

const Card = ({ avatar_url,
    bio,
    followers,
    following,
    id,
    location,
    name,
    public_repos,
    updated_at,
    html_url }) => {

    return (
        <div className='container d-flex justify-content-center'>
            <div className="card" style={{ width: "28rem" }}>
                <img src={avatar_url} className="card-img-top img" alt="..." /> <br />
                <div className="card-body">
                    <h5 className="card-title">GITHUB USER DETAILS:</h5> <br />
                    <p className="card-text"><b>ID: </b>{id}</p>
                    <p className="card-text"><b>NAME: </b>{name}</p>
                    <p className="card-text"><b>FOLLOWERS: </b>{followers}</p>
                    <p className="card-text"><b>FOLLOWING: </b>{following}</p>
                    <p className="card-text"><b>PUBLIC REPOS: </b>{public_repos}</p>
                    <p className="card-text"><b>BIO: </b>{bio}</p>
                    <p className="card-text"><b>LOCATION: </b>{location}</p>
                    <p className="card-text"><b>LAST UPDATE: </b>{updated_at}</p>
                    <p className="card-text"><b>PROFILE LINK: </b><a href={html_url} target="_blank">{name}</a></p>
                </div>
            </div>
        </div>
    )
}

export default Card;
import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import getProfileActions from "../store/actions/index";
import UserNotFound from './UserNotFound';

const UserCard = ({ inputValue }) => {
    const { userData, userDataLoading, userDataError } = useSelector((state) => state.reducer);

    console.log(userData, "data");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileActions(inputValue));
    }, [inputValue]);

    const { avatar_url, bio, followers, following, id, location, name, public_repos, updated_at, html_url } = userData;

    return (
        <div className='container'>
            {
                userDataLoading ? (
                    <h2>Loading!!! please wait....</h2>
                ) : userDataError ? (
                    <UserNotFound />
                ) : (
                    <Card
                        avatar_url={avatar_url}
                        bio={bio}
                        followers={followers}
                        following={following}
                        id={id}
                        location={location}
                        name={name}
                        public_repos={public_repos}
                        updated_at={updated_at}
                        html_url={html_url}
                    />
                )
            }
        </div>
    )
}

export default UserCard;
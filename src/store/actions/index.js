import ActionTypes from "../constant";
import axios from "axios";

const getProfileActions = (users) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.GITHUB_PROFILE_LOADING,
        });
        const search = users ? users : "example";
        axios.get(`https://api.github.com/users/${search}`)
            .then((response) => dispatch({
                type: ActionTypes.GITHUB_PROFILE,
                payload: response.data
            }))
            .catch((error) => dispatch({
                type: ActionTypes.GITHUB_PROFILE_ERROR,
                payload: error.message
            }));
    };
};

export default getProfileActions;
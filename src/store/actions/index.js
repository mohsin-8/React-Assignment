import ActionTypes from "../constant";

const loginAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.USER_LOGIN,
            payload: data
        });
    };
};

const logoutAction = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.USER_LOGOUT,
        });
    };
};

export {
    loginAction,
    logoutAction
};
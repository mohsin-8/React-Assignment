import ActionTypes from "../constant";

const initialState = {
    userData: {},
    userDataLoading: false,
    userDataError: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GITHUB_PROFILE_LOADING:
            return {
                ...state,
                userDataLoading: true
            };

        case ActionTypes.GITHUB_PROFILE:
            return {
                ...state,
                userData: action.payload,
                userDataLoading: false,
                userDataError: ""
            };

        case ActionTypes.GITHUB_PROFILE_ERROR:
            return {
                ...state,
                userDataLoading: false,
                userDataError: action.payload,
                userData: {}
            };

        default: return state;
    };
};

export default reducer;
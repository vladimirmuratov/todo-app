import {CLEANERROR, CREATEPOST, ERROR, FETCHPOSTS, HIDELOADER, SHOWLOADER} from "./types";

const initialState = {
    posts: [],
    asyncPosts: null,
    error: null,
    loading: false
}

export const postReducer = (state=initialState, action) => {
    switch (action.type){
        case CREATEPOST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case FETCHPOSTS:
            return {
                ...state,
                asyncPosts: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEANERROR:
            return {
                ...state,
                error: null
            }
        case SHOWLOADER:
            return {
                ...state,
                loading: true
            }
        case HIDELOADER:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

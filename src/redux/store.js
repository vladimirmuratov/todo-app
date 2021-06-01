import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {postReducer} from "./post/postReducer";

const rootReducer = combineReducers({
    post: postReducer
})


export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
)
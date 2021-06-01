import {CLEANERROR, CREATEPOST, ERROR, FETCHPOSTS, HIDELOADER, SHOWLOADER} from "./types";
import {addPostApi, fetchPostsApi} from "../../api/api";

export const createPost = (id, text) => async dispatch => {
    await addPostApi(id, text)
    dispatch({
        type: CREATEPOST,
        payload: {id, text}

    })
}

export const asyncPosts = () => async dispatch => {
    dispatch(showLoader())
    const response = await fetchPostsApi()
    dispatch({
        type: FETCHPOSTS,
        payload: response
    })
    dispatch(hideLoader())
}

export const errorPost = textError => ({
    type: ERROR,
    payload: textError
})

export const cleanError = () => ({
    type: CLEANERROR
})

export const showLoader = () => ({
    type: SHOWLOADER
})

export const hideLoader = () => ({
    type: HIDELOADER
})
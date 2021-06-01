import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {asyncPosts} from "../redux/post/actions";
import {Post} from "./Post";
import {Loader} from "./Loader";
import {deletePostApi} from "../api/api";

export const AsyncPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.asyncPosts)
    const loading = useSelector(state => state.post.loading)

    const onDeleteAsyncPostHandler = async (id) => {
        await deletePostApi(id)
        dispatch(asyncPosts())
    }

    const onAsyncHandler = () => {
        dispatch(asyncPosts())
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div>
            <button className="btn btn-success" style={{marginBottom: 10}} onClick={onAsyncHandler}>Async</button>
            <div className="asyncBlock">
                {posts
                    ? Object.keys(posts).map(key => (
                        <div className='row' key={posts[key].id}>
                            <div className='col-md-6'>
                                <Post text={posts[key].text}/>
                            </div>
                            <div className='col-md-6'>
                                <button type="button" className="btn-close" aria-label="Close"
                                        onClick={() => onDeleteAsyncPostHandler(key)}/>
                            </div>
                        </div>
                    ))
                    : <p className="text-danger">Нет Async Posts</p>
                }
            </div>
        </div>
    )
}
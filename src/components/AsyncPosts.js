import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {asyncPosts} from "../redux/post/actions";
import {Post} from "./Post";
import {Loader} from "./Loader";

export const AsyncPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.asyncPosts)
    const loading = useSelector(state => state.post.loading)

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
                        <Post text={posts[key].text} key={posts[key].id}/>
                    ))
                    : <p className="text-danger">Нет Async Posts</p>
                }
            </div>
        </div>
    )
}
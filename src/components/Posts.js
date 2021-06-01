import React from "react";
import {useSelector} from "react-redux";
import {Post} from "./Post";

export const Posts = () => {
    const posts = useSelector(state => state.post.posts)
    return (
        <>
            {posts.length
                ? posts.map(post => (
                    <Post text={post.text} key={post.id}/>
                ))
                : <p style={{color: 'red', fontSize: 20}}>Постов пока нет...</p>
            }
        </>
    )
}
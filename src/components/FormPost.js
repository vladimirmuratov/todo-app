import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cleanError, createPost, errorPost} from "../redux/post/actions";
import {Alert} from "./Alert";

export const FormPost = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const error = useSelector(state => state.post.error)

    const onsubmitHandler = event => {
        event.preventDefault()
        if (!text) {
            dispatch(errorPost('Поле не может быть пустым!!!'))
            setTimeout(() => {
                dispatch(cleanError())
            }, 5000)
            return
        }
        const id = Date.now().toString()
        dispatch(createPost(id, text))
        setText('')

    }

    return (
        <>
            {error && <Alert text={error}/>}
            <form style={{width: '80%'}} onSubmit={onsubmitHandler}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
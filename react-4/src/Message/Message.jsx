import React from 'react'
import { gmAction, gnAction } from '../redux/Message/message.action'
import { useDispatch, useSelector } from 'react-redux'
const Message = () => {
    let message = useSelector((state) => {
        return state.message
    });
    let dispatch = useDispatch();

    let gmHandler = () => {
        dispatch(gmAction());
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return (
        <div>
            <h1>Message Component</h1>
            <pre>{JSON.stringify(message)}</pre>
            <h2>Wish Message:{message.message}</h2>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message

import React from 'react'
import { gmAction, gnAction } from '../redux/Message/message.action'
import { useDisptach } from 'react-redux'
const Message = () => {
    let dispatch = useDisptach();
    let message = "Hello,....."
    let gmHandler = () => {
        dispatch(gmAction());
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return (
        <div>
            <h1>Message Component</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message

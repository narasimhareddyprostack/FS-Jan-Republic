import React, { useState } from 'react'
let Message = () => {
    let [msg, setMsg] = useState("Hello");
    let gmHandler = () => {
        setMsg("Good Morning")
    }
    let gnHandler = () => {
        setMsg("Good Night, .....")
    }
    return <div>
        <h1>Message Component :{msg}</h1>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}

export default Message
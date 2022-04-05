import React, { useState } from 'react'
let Message = () => {
    let [msg, setMsg] = useState("Hello");
    let gmHandler = () => {
        setMsg("Good Morning")
    }
    let gnHandler = () => {
        setMsg("Good Night, .....")
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">  <h6>Message Component :{msg}</h6></div>
                    <div className="card-body">
                        <button onClick={gmHandler} className="btn btn-success mr-5">GM</button>
                        <button onClick={gnHandler} className="btn btn-warning">GN</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Message
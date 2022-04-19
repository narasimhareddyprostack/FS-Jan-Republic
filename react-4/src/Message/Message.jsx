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
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="navbar-brand">Redux Example</a>
            </nav>
            <div className="container">
                <pre>{JSON.stringify(message)}</pre>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h2>Wish Message:{message.message}</h2>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-success mr-5" onClick={gmHandler}>GM</button>
                                <button className="btn btn-primary" onClick={gnHandler}>GN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Message

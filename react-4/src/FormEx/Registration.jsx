import React, { useState } from 'react'

const Registration = () => {
    let [user, setUser] = useState({ email: "", password: "", mobile: "" })
    let updateHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    let submitHandler = (event) => {
        event.preventDefault();
        console.log(user);
    }
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-6">
                    <pre>{JSON.stringify(user)}</pre>
                    <div className="card">
                        <div className="card-header">
                            <h4>Registration Page</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input name="email" type="text" className="form-control" placeholder="Email Id" onChange={updateHandler} />
                                </div>
                                <div className="form-group">
                                    <input name="password" type="text" className="form-control" placeholder="Password" onChange={updateHandler} />
                                </div>
                                <div className="form-group">
                                    <input name="mobile" type="text" className="form-control" placeholder="Mobile" onChange={updateHandler} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration

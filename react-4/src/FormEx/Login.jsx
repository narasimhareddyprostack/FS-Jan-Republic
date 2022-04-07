import React from 'react'
class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        /*  console.log(event)
         console.log(event.target)
         console.log(event.target.value) */
        /*  console.log("Test Case 123 - EmailHandler") */
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    submitHandler = (event) => {
        //send object o back end\
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <div>
            <h1>Login Page</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>Email</label>
                <input type="text" onChange={this.emailHandler} /> <br />
                <label>Password</label>
                <input type="text" onChange={this.passwordHandler} /> <br />
                <input type="submit" />
            </form>
        </div>
    }
}
export default Login
import React from 'react'
class Login extends React.Component {
    render() {
        return <div>
            <form>
                <label>Email</label>
                <input type="text" /> <br />
                <label>Password</label>
                <input type="text" /> <br />
                <input type="submit" />
            </form>
        </div>
    }
}
export default Login
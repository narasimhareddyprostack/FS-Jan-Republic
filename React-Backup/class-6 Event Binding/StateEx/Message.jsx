import React from 'react'
class Message extends React.Component {
    //msg = "Hello";
    state = {
        msg: "Hello"
    }
    messageHandler = () => {
        this.setState({ msg: "Good Morning....." })
    }
    gnHandler = () => {
        this.setState({ msg: "Goood Night,,,,," })
    }
    render() {
        console.log("render method")
        return <div>
            <h1>Message:{this.state.msg}</h1>
            <button onClick={this.messageHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message
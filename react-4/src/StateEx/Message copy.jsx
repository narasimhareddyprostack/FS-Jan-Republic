import React from 'react'
class Message extends React.Component {
    msg = "Hello";
    messageHandler = () => {
        this.msg = "Good Morning"
        console.log("message Handler");
        console.log(this.msg);
        this.forceUpdate()
    }
    render() {
        return <div>
            <h1>Message:{this.msg}</h1>
            <button onClick={this.messageHandler}>GM</button>
        </div>
    }
}
export default Message
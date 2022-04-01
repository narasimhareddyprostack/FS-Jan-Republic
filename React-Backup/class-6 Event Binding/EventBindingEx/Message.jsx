import React from 'react'
class Message extends React.Component {
    state = {
        message: "Hello,....."
    }
    messageHandler = (value) => {
        console.log(value)
        /* this.setState({ message: "Hello Wait , I am also coming for Interveiw" }) */
        this.setState({ message: value })
    }
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            Message Value:<span> {this.state.message}</span>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-success mr-5" onClick={this.messageHandler.bind(this, "Good Morning....")}>GM</button>
                            <button className="btn btn-primary mr-5" onClick={this.messageHandler.bind(this, "Good Afternoon")}>GA</button>
                            <button className="btn btn-warning" onClick={this.messageHandler.bind(this, "Good Night! Dreams")}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Message
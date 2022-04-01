import React from 'react'
class Counter extends React.Component {
    //counter = 1;
    state = {
        counter: 1
    }
    incrHandler = () => {
        /*   console.log("Test Case 123") */
        this.setState({ counter: this.state.counter + 1 })
    }
    decrHandler = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h1>Counter Value: {this.state.counter}</h1>
            <button onClick={this.incrHandler}>INCR</button>
            <button onClick={this.decrHandler}>DECR</button>
        </div>
    }

}
export default Counter
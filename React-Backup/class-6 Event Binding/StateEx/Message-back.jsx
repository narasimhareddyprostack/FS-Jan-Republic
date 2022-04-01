import React from 'react'
class Message extends React.Component {
    constructor(props) {
        super(props);
        console.log("First Constructor execute")
    }
    render() {
        console.log("Second -Render Method");
        return <div>
            <h1>Message Component</h1>
        </div>
    }
}
export default Message
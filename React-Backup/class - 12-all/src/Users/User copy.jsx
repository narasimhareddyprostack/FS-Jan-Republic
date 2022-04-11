import React from 'react'
class User extends React.Component {
    constructor(props) {
        super(props);
        console.log("First -C")
    }
    componentDidMount() {
        console.log("Third - compDidmount")
    }
    render() {
        console.log("Second -Render method")
        return <React.Fragment>

        </React.Fragment>
    }
}

export default User
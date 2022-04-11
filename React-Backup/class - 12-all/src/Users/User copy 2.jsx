import React from 'react'
import Axios from 'axios'
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }
    componentDidMount() {
        //Axios.get().then().catch();
        //Axios.get('https://jsonplaceholder.typicode.com/users').then().catch();
        //Axios.get('https://jsonplaceholder.typicode.com/users').then(() => { }).catch(() => { });
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            //console.log(response.data)
        }).catch(() => { });
    }
    render() {

        return <React.Fragment>

        </React.Fragment>
    }
}

export default User
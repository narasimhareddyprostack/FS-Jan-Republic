import React from 'react'
import Axios from 'axios'
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data })
            })
            .catch(() => { });
    }
    render() {

        return <React.Fragment>
            <pre>{JSON.stringify(this.state.users)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((user) => {
                                        return <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default User
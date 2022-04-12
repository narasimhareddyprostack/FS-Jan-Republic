import React, { Component } from 'react'

class ContactList extends Component {
    selectedContactHandler = (contact) => {
        /*  console.log(contact.email) */
        this.props.selectedContact(contact);
    }
    render() {
        let { contacts } = this.props
        return (
            <div >
                <h1>Contact App</h1>
                {/* <pre>{JSON.stringify(this.props.contacts)}</pre> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover">
                                <thead className="bg-primary">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        contacts.map((contact) => {
                                            return <tr key={contact.login.uuid} onMouseOver={this.selectedContactHandler.bind(this, contact)}>
                                                <td>{contact.login.uuid.substring(32, 36)}</td>
                                                <td>{contact.name.first.toUpperCase()}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.gender}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactList

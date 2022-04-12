import React, { Component } from 'react'

class ContactDetails extends Component {
    render() {
        return <div className="container">
            <div className="row">
                {/*      <pre>{JSON.stringify(this.props)}</pre> */}
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            < img src={this.props.selContact.picture.large} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                < li className="list-group-item">
                                    {this.props.selContact.name.first}
                                </li>
                                < li className="list-group-item">
                                    {this.props.selContact.location.country}
                                </li>

                                < li className="list-group-item">
                                    {this.props.selContact.dob.age}
                                </li>
                                < li className="list-group-item">
                                    {this.props.selContact.location.city}
                                </li>
                                < li className="list-group-item">
                                    {this.props.selContact.location.street.name}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    }
}

export default ContactDetails

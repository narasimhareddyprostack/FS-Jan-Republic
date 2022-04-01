import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div>
                <h1>Product Component</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header">
                                    <img src={this.props.p_Data.image} />
                                </div>
                                <div className="card-body">
                                    <h6>{this.props.p_Data.name}</h6>
                                    <h6>{this.props.p_Data.price}</h6>
                                    <h6>{this.props.p_Data.store_Name}</h6>
                                    <h6>{this.props.p_Data.del_Type}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product

import React, { useState } from 'react'

const Product = () => {
    let [product, setProduct] = useState({ name: "Iphone 12", price: 45000, qty: 1 })
    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <table className="table table-hover">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Name</td>
                            {/*  <td>image</td> */}
                            <td>price</td>
                            <td>QTY</td>
                            <td>Total Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty} <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                            <td>{product.qty * product.price}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
}

export default Product

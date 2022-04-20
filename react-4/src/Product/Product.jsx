import React from 'react'
import { incrAction, decrAction } from '../redux/product/product.action'
import { useDispatch, useSelector } from 'react-redux'
const Product = () => {
    let dispatch = useDispatch();
    let product = useSelector((state) => {
        return state.product
    });
    let incrHandler = () => {
        //dispatching an action
        dispatch(incrAction())
    }
    let decrHandler = () => {
        //dispatching an action
        dispatch(decrAction())
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={decrHandler}>-</button>{product.qty}  <button onClick={incrHandler}>+</button></td>
                                    <td>{product.qty * product.price}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*  <pre>{JSON.stringify(product)}</pre>

            {product.qty} */}

        </div>
    )
}

export default Product

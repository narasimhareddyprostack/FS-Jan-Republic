import React, { useState } from 'react'

const Product = () => {
    let [product, setProduct] = useState({ name: "Iphone 12", price: 45000, qty: 1 })
    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    return <div>
        <h1>Product Name:{product.name}</h1>
        <h1>Product Name:{product.price}</h1>
        <button onClick={decrHandler}>  - </button>{product.qty}<button onClick={incrHandler}>+</button>
    </div>
}

export default Product

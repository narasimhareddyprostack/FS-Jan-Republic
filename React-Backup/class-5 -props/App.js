import React from 'react'
import Navbar from './Navbar/Navbar'
import CompA from './PropsEx/CompA'
import ProductData from './Product/ProductData'
class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <ProductData />
        </div>
    }
}
export default App
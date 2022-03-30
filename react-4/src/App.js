import React from 'react'
import Message from './StateEx/Message'
import Navbar from './Navbar/Navbar'
import Counter from './StateEx/Counter'
import Product from './StateEx/Product'
class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <Product />
        </div>
    }
}
export default App
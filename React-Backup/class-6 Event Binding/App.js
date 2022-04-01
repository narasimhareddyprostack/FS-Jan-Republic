import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './EventBindingEx/Message'
/* import Message from './StateEx/Message'
import Counter from './StateEx/Counter'
import Product from './StateEx/Product'
 */class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <Message />
        </div>
    }
}
export default App
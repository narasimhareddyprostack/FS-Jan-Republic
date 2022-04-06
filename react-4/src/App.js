import React from 'react'
import Navbar from './Navbar/Navbar'
import Order from './Home/Order'
import Message from './Message/Message'
import Home from './Home/Home'
import Product from './Product/Product'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/message" component={Message} />
                    <Route path="/order" component={Order} />
                    <Route path="/product" component={Product} />
                </Switch>
            </Router>
        </div>
    )
}

export default App

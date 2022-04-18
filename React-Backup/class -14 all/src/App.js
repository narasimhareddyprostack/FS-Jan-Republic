import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactApp from './ContactApp/ContactApp'
export class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/contacts" component={ContactApp} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App

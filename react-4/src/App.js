import React from 'react'
import Navbar from './Navbar/Navbar'
import Login from './FormEx/Login'
import Registration from './FormEx/Registration'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/regi" component={Registration} />
                    <Route path="/login" component={Login} />

                </Switch>
            </Router>
        </div>
    )
}

export default App

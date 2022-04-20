import React from 'react'
import Product from './Product/Product'
import { store } from './redux/store'
import { Provider } from 'react-redux'
const App = () => {
    return <div>
        <Provider store={store}>
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Redux Example 2</a>
            </nav>
            <Product />
        </Provider>

    </div>
}

export default App

import React from 'react'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Message />

            </div>
        </Provider >
    )
}

export default App

import React from 'react'
import Navbar from './Navbar/Navbar'
/* import './assets/css/rajnikanth.css' */
import Hero from './Hero/Hero'
import Actress from './Actress/Actress'

class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <Actress />
            <Hero />
        </div>
    }
}
export default App
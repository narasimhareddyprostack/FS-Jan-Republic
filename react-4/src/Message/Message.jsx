import React from 'react'
class Message extends React.Component {
    hero = "Rajnikanth";
    heroinName = "Nayanatara"
    render() {
        return <div>
            <h1>Actor: {this.hero}</h1>
            <h1>Actress: {this.heroinName}</h1>
        </div>
    }
}

export default Message
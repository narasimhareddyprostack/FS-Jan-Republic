import React from 'react'
class Message extends React.Component {
    message = "Good Morning! Mr RajniKanth"
    render() {
        return <div>
            <h3>Message Component</h3>
            <h2>Hero Name: {this.message}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia architecto ipsa omnis dicta alias illum ducimus nobis ut quisquam vero temporibus facilis accusantium quod, voluptas qui, nulla adipisci deserunt aperiam.</p>
        </div>
    }

}
export default Message
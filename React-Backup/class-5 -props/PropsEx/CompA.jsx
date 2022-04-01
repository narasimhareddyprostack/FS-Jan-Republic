import CompB from './CompB'
import React from 'react'
class CompA extends React.Component {
    emp = { id: 101, name: "Rahul Gandi", sal: 45000 }
    render() {
        return <div>
            <h1>Component A</h1>
            <hr />
            <CompB one={"GM"} emp_Details={this.emp} />

        </div>
    }
}

export default CompA
import React from 'react'
class CompB extends React.Component {
    render() {
        return <div>

            <h1>Component B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>Employee Name:{this.props.emp_Details.name}</h4>
            <h4>Employee Name:{this.props.emp_Details.id}</h4>
            <h4>Employee Name:{this.props.emp_Details.sal}</h4>
        </div>
    }
}

export default CompB
let CompB = (props) => {

    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        {/*   <h1>{props.one}</h1>
        <h1>{props.two}</h1> */}
        <h3>Employee Name:{props.name}</h3>
        <h4>Employee Salary:{props.salary}</h4>
    </div>
}
export default CompB
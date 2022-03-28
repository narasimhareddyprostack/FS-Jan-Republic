import CompB from './CompB'
let CompA = () => {
    let emp_Name = "Rahul Gandhi"
    let emp_Sal = 45000;
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB one={"GM"} two={"GN"} name={emp_Name} salary={emp_Sal} />
    </div>
}
export default CompA
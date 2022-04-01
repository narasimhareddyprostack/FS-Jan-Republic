import React from 'react'
import { employees } from './data'; //named import
class Employee extends React.Component {
    render() {
        return <div>
            <pre>{JSON.stringify(employees)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Salary</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    employees.map((employee) => {
                                        return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.salary}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Employee
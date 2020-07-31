import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Employee = props => (
    <tr>
        <td>{props.employee.employeename}</td>
        <td>{props.employee.empfathername}</td>
        <td>{props.employee.employeepan}</td>
        <td>{props.employee.birthdate}</td>
        <td>{props.employee.joindate}</td>
        <td>{props.employee.exitdate}</td>
        <td>{props.employee.mobilenum}</td>
        <td>{props.employee.employeeemail}</td>
        <td>{props.employee.employeeaddress}</td>
        <td>{props.employee.employeedetails}</td>
        <td>
            <Link to ={"/employee/edit/" + props.employee._id}>edit</Link> | 
            <a href="/employee/" onClick={() => {props.deleteEmployee(props.employee._id)}}>delete</a>
        </td>
    </tr>
)

export default class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.state = {employees : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employees/')
            .then(resp => {
                this.setState({employees : resp.data});
            })
        .catch((error) => {console.log(error);})
    }

    deleteEmployee(id) {
        axios.delete('http://localhost:5000/employees/' + id)
            .then(res => console.log(res.data));
        this.setState({
            employees : this.state.employees.filter(el => el._id !==id)
        })
    }

    employeesList() {
        return this.state.employees.map(currentemployee => {
            return <Employee employee={currentemployee} deleteEmployee={this.deleteEmployee} key={currentemployee._id} />;
        })
    }

    render () {
        return(
            <div>
                <h3>List of Employees</h3>
                <table className="table table-responsive">
                    <thead className="thead-light">
                        <tr>
                            <th>Employee Name</th>
                            <th>Father Name</th>
                            <th>PAN</th>
                            <th>Birth Date</th>
                            <th>Join Date</th>
                            <th>Exit Date</th>
                            <th>Mobile</th>
                            <th>E-Mail</th>
                            <th>Address</th>
                            <th>Remarks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.employeesList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
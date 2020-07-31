import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Principal = props => (
    <tr>
        <td>{props.principal.membershipno}</td>
        <td>{props.principal.membername}</td>
        <td>{props.principal.memberpan}</td>
        <td>{props.principal.birthdate}</td>
        <td>{props.principal.passdate}</td>
        <td>{props.principal.joindate}</td>
        <td>{props.principal.exitdate}</td>
        <td>{props.principal.mobilenum}</td>
        <td>{props.principal.memberemail}</td>
        <td>{props.principal.memaddress}</td>
        <td>
            <Link to ={"/prof/edit/" + props.principal._id}>edit</Link> | 
            <a href="/prof/" onClick={() => {props.deletePrincipal(props.principal._id)}}>delete</a>
        </td>
    </tr>
)

export default class PrincipalsList extends Component {
    constructor(props) {
        super(props);
        this.deletePrincipal = this.deletePrincipal.bind(this);
        this.state = {principals : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/principals/')
            .then(response => {
                this.setState({principals : response.data});
            })
        .catch((error) => {console.log(error);})
    }

    deletePrincipal(id) {
        axios.delete('http://localhost:5000/principals/' + id)
            .then(res => console.log(res.data));
        this.setState({
            principals : this.state.principals.filter(el => el._id !==id)
        })
    }

    principalsList() {
        return this.state.principals.map(currentprincipal => {
            return <Principal principal={currentprincipal} deletePrincipal={this.deletePrincipal} key={currentprincipal._id} />;
        })
    }

    render () {
        return(
            <div>
                <h3>List of Principals</h3>
                <table className="table table-responsive">
                    <thead className="thead-light">
                        <tr>
                            <th>Membership No</th>
                            <th>Member Name</th>
                            <th>PAN</th>
                            <th>Birth Date</th>
                            <th>Pass Date</th>
                            <th>Join Date</th>
                            <th>Exit Date</th>
                            <th>Mobile</th>
                            <th>E-Mail</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.principalsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
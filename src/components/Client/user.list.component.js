import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const User = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.status}</td>
        <td>{props.user.groupname}</td>
        <td>{props.user.dob}</td>
        <td>{props.user.pan}</td>
        <td>{props.user.itpw}</td>
        <td>{props.user.gstin}</td>
        <td>{props.user.gstld}</td>
        <td>{props.user.bnkld}</td>
        <td>
            <Link to={"/users/edit/" + props.user._id}>edit</Link> | 
            <a href="#" onClick={() => {props.deleteUser(props.user._id)}}>delete</a>
        </td>       
    </tr>
)

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {users : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({users : response.data});
            })
            .catch(error => {console.log(error);})
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/' + id)
            .then(res => console.log(res.data));
        this.setState({
            users : this.state.users.filter(el => el._id !== id)
        })
    }

    UsersList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id} />;
        })
    }

    render() {
        return(
            <div>
                <h3>Client List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>username </th>
                            <th>status</th>
                            <th>groupname</th>
                            <th>dob</th>
                            <th>pan</th>
                            <th>itpw</th>
                            <th>gstin</th>
                            <th>gstld</th>
                            <th>bnkld</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.UsersList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
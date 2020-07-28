import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Group = props => (
    <tr>
        <td>{props.group.groupname}</td>
        <td>
            <Link to ={"/group/edit/" + props.group.groupname}>edit</Link> |  
            <a href="/group/" onClick={() => {props.deletegroup(props.group.groupname)}}>delete</a>
        </td>
    </tr>
)

export default class GroupList extends Component {
    constructor(props) {
        super(props);
        this.deletegroup = this.deletegroup.bind(this);
        this.state = {groups : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/groups/')
            .then(response => {
                this.setState({groups : response.data});
            })
        .catch((error) => {console.log(error);})
    }

    deletegroup(groupname) {
        axios.delete('http://localhost:5000/groups/' + groupname)
            .then(res => console.log(res.data));
        this.setState({
            groups : this.state.groups.filter(el => el.groupname !==groupname)
        })
    }

    groupsList() {
        return this.state.groups.map(currentgroup => {
            return <Group group={currentgroup} deletegroup={this.deletegroup} key={currentgroup.groupname} />;
        })
    }

    render () {
        return(
            <div>
                <h3>Assignment List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Group name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.groupsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
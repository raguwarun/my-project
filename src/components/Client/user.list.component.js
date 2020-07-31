import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function GstDetails(arr){
    var len = arr.length;
    var data = '';
    if(len > 0){
      for (var i=0;i<len;i++){
        data = data + "<tr><td>" + arr[i][0] + "</td><td>" + arr[i][1] + "</td><td>" + arr[i][2] + "</td></tr>";
      }
    }
    return data;
}

const User = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.status}</td>
        <td>{props.user.groupname}</td>
        <td>{props.user.dob}</td>
        <td>{props.user.pan}</td>
        <td>{props.user.itpw}</td>
        <td>{props.user.gstin}</td>
        <td><table><thead><tr><th>State</th><th>GST Id</th><th>GST Password</th></tr></thead><tbody>
            {props.user.gstld.map(function(user){
                return <tr>{user.map(function(data){
                    return <td key={data} value={data}>{data}</td>})}</tr>
            })}
            </tbody></table></td>
        <td><table><thead><tr><th>Bank</th><th>IFSC</th><th>Account No.</th></tr></thead><tbody>
            {props.user.bnkld.map(function(user){
                return <tr>{user.map(function(data){
                    return <td key={data} value={data}>{data}</td>})}</tr>
            })}
            </tbody></table></td>
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
        this.myFunction = this.myFunction.bind(this);
        this.state = {users : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({users : response.data});
                console.log(response.data[0].gstld);
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

    myFunction(e) {
        var txtvalue1, txtvalue2, txtvalue3;
        var td1, td2, td3;
        var input = e.target.value.toUpperCase();
        var table = document.getElementById("myTable");
        var tr = table.getElementsByTagName("tr");
        for (var i=0;i<tr.length;i++){
            td1 = tr[i].getElementsByTagName("td")[0];
            td2 = tr[i].getElementsByTagName("td")[1];
            td3 = tr[i].getElementsByTagName("td")[4];
            if(td1) {
                txtvalue1 = td1.textContent.toUpperCase() || td1.innerText.toUpperCase();
                txtvalue2 = td2.textContent.toUpperCase() || td2.innerText.toUpperCase();
                txtvalue3 = td3.textContent.toUpperCase() || td3.innerText.toUpperCase();
                if(txtvalue1.indexOf(input) > -1 || txtvalue2.indexOf(input) > -1 ||txtvalue3.indexOf(input) > -1){
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    render() {
        return(
            <div>
                <h3>Client List</h3>
                <div className="form-group">
                <input type="text" className="form-control" onKeyUp={this.myFunction} placeholder="Search for names.." title="Type in a name"></input>
                </div>
                <div className="table-responsive">
                <table className="table"  id="myTable">
                    <thead className="thead-light">
                        <tr>
                            <th>ClientName</th>
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
            </div>
        )
    }
}
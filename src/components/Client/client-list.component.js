import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Client = props => (
    <tr>
        <td>{props.client.username}</td>
        <td>{props.client.status}</td>
        <td>{props.client.groupname}</td>
        <td>{props.client.dob}</td>
        <td>{props.client.pan}</td>
        <td>{props.client.itpw}</td>
        <td>{props.client.gstin}</td>
        <td><table><thead><tr><th>State</th><th>GST Id</th><th>Password</th></tr></thead><tbody>
            {props.client.gstld.map(function(client){
                return <tr>{client.map(function(data){
                    return <td key={data} value={data}>{data}</td>})}</tr>
            })}
            </tbody></table></td>
        <td><table><thead><tr><th>Bank</th><th>IFSC</th><th>Account No.</th></tr></thead><tbody>
            {props.client.bnkld.map(function(client){
                return <tr>{client.map(function(data){
                    return <td key={data} value={data}>{data}</td>})}</tr>
            })}
            </tbody></table></td>
        <td>
            <Link to={"/client/edit/" + props.client._id}>edit</Link> | 
            <a href="#" onClick={() => {props.deleteClient(props.client._id)}}>delete</a>
        </td>       
    </tr>
)

export default class ClientsList extends Component {
    constructor(props) {
        super(props);
        this.deleteClient = this.deleteClient.bind(this);
        this.myFunction = this.myFunction.bind(this);
        this.state = {clients : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/clients/')
            .then(response => {
                this.setState({clients : response.data});
                console.log(response.data[0].gstld);
            })
            .catch(error => {console.log(error);})
    }

    deleteClient(id) {
        axios.delete('http://localhost:5000/clients/' + id)
            .then(res => console.log(res.data));
        this.setState({
            clients : this.state.clients.filter(el => el._id !== id)
        })
    }

    ClientsList() {
        return this.state.clients.map(currentclient => {
            return <Client client={currentclient} deleteClient={this.deleteClient} key={currentclient._id} />;
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
                            <th>Password</th>
                            <th>gstin</th>
                            <th>gstld</th>
                            <th>bnkld</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.ClientsList() }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
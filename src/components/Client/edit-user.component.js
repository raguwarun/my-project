import React, { Component } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangegroupname = this.onChangegroupname.bind(this);
        this.onChangedob = this.onChangedob.bind(this);
        this.onChangepan = this.onChangepan.bind(this);
        this.onChangeitpw = this.onChangeitpw.bind(this);
        this.onChangegstin = this.onChangegstin.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangebnkNumber = this.onChangebnkNumber.bind(this);
        this.uppercase = this.uppercase.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id : '',
            username : '',
            status : '',
            groupname : '',
            dob : new Date(),
            pan : '',
            itpw : '',
            gstin : '',
            gstld : [],
            bnkld : [],
            groups : []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    id : response.data.id,
                    username : response.data.username,
                    status : response.data.status,
                    groupname : response.data.groupname,
                    dob : new Date(response.data.dob),
                    pan : response.data.pan,
                    itpw : response.data.itpw,
                    gstin : response.data.gstin,
                    gstld : response.data.gstld,
                    bnkld : response.data.bnkld,
                })
            })
            .catch(error => {console.log(error);})

        axios.get('http://localhost:5000/groups/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        groups : response.data.map(group => group.groupname),
                        groupname : response.data[0].groupname
                    });
                }
            })
            .catch((error) => {console.log(error);})
    }

    onChangeUsername(e) {
        this.setState ({
            username : e.target.value
        });
    }

    onChangeStatus(e) {
        this.setState({
            status : e.target.value
        });
    }

    onChangegroupname(e) {
        this.setState({
            groupname : e.target.value
        });
    }

    onChangedob(date) {
        this.setState({dob : date});
    }

    onChangepan(e) {this.setState({pan : e.target.value});}
    onChangegstin(e) {this.setState({gstin : e.target.value});}
    onChangeitpw(e) {this.setState({itpw : e.target.value});}

    onChangeNumber(e) {
        var len = e.target.value;
        var i = 0;
        var data = '';
        for (let i = 0; i < len; i++) {
            data = data + '<tr><td>  /n</td><td contenteditable required></td><td>   </td><td contenteditable required></td><td>   </td><td contenteditable required></td></tr>';
        }
        document.getElementById("gsttable").innerHTML = data;
    }

    onChangebnkNumber(e) {
        var len = e.target.value;
        var i = 0;
        var data = '';
        for (let i = 0; i < len; i++) {
            data = data + '<tr><td>  /n</td><td contenteditable required></td><td>   </td><td contenteditable required></td><td>   </td><td contenteditable required></td></tr>';
        }
        document.getElementById("banktable").innerHTML = data;
    }

    onSubmit(e) {
        e.preventDefault();
        var table = document.getElementById("gsttable");
        var arr = [];
        var len = table.rows.length;
        for (var j = 0;j<len;j++){
            for (var i = 0;i<6;i++){
                arr.push(table.rows[j].cells[i].innerHTML);
            }
            this.state.gstld.push(arr);
            arr = []
        }

        table = document.getElementById("banktable");
        len = table.rows.length;
        for (j = 0;j<len;j++){
            for (i = 0;i<6;i++){
                arr.push(table.rows[j].cells[i].innerHTML);
            }
            this.state.bnkld.push(arr);
            arr = []
        }

        
        const newUser = {
            id : "" + this.state.status[0] + this.state.username[0] + this.state.username[1] + this.state.username[2] + this.state.dob.getFullYear() + this.state.dob.getMonth(),
            username : this.state.username,
            status : this.state.status,
            groupname : this.state.groupname,
            dob : this.state.dob,
            pan : this.state.pan,
            itpw : this.state.itpw,
            gstin : this.state.gstin,
            gstld : this.state.gstld,
            bnkld : this.state.bnkld
        }
        console.log(newUser);
        axios.post('http://localhost:5000/users/update/'+this.props.match.params.id, newUser)
            .then(res => console.log(res.data));
            
        this.setState({
            username : '',
            status : '',
            groupname : '',
            dob : new Date(),
            pan : '',
            itpw : '',
            gstld : [],
            bnkld : [],
            gstin : ''
        });
    }

    uppercase(e) {
        e.target.value = e.target.value.toUpperCase();
    }

    render(){
        return(
            <div>
                <h3>Create New Client</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Client Name<b style={{color:"red"}}>*</b> :</label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label>Group Name : </label>
                        <select required className="form-control" value={this.state.groupname} onChange={this.onChangegroupname}>
                        <option key="" value=""></option>
                        <option key="Primary" value="Primary">Primary</option>
                        {
                            this.state.groups.map(function(group) {
                                return <option key={group} value={group} >{group}</option>
                            })
                        }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Status<b style={{color:"red"}}>*</b> :</label>
                        <select required className="form-control" value={this.state.status} onChange={this.onChangeStatus} >
                            <option>Select Status</option>
                            <option value="Firm">Firm</option>
                            <option value="Company">Company</option>
                            <option value="Individual">Individual</option>
                            <option value="AOP">AOP</option>
                            <option value="HUF">HUF</option>
                            <option value="Trust">Trust</option>
                            <option value="BOI">BOI</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date of Incorporation/Birth <b style={{color:"red"}}>*</b> :</label>
                            <div>
                            <DatePicker
                                selected={this.state.dob}
                                onChange={this.onChangedob}
                            />
                            </div>
                    </div>
                    <div className="form-group">
                        <label>Permanent Account Number (PAN) :</label>
                        <input type="String" className="form-control" minLength="10" maxLength="10" value={this.state.pan} onKeyUp={this.uppercase} onChange={this.onChangepan} />
                        <input type="String" className="form-control" placeholder="Provide IT Password #" value={this.state.itpw} onChange={this.onChangeitpw} />
                    </div>
                    <div className="form-group">
                        <label>GST Identification Number (GSTIN) :</label>
                        <input type="String" className="form-control" value={this.state.gstin} onKeyUp={this.uppercase} onChange={this.onChangegstin} />
                        <label>Number of GST Registrations : </label><input type="number" id="inputnum" onChange={this.onChangeNumber} />
                        <table className="table">
                            <thead>
                                <tr><th></th><th>State Name #</th><th></th><th>GST Login #</th><th></th><th>GST Password #</th></tr>
                            </thead>
                            <tbody  id="gsttable">
                            </tbody> 
                        </table>
                    </div>
                    <div className="form-group">
                        <label>Bank Account Details :</label>
                        <label>Number of Bank Accounts : </label><input type="number" id="inputnum" onChange={this.onChangebnkNumber} />
                        <table className="table">
                            <thead>
                                <tr><th></th><th>Bank Name #</th><th></th><th>IFSC #</th><th></th><th>Account Number #</th></tr>
                            </thead>
                            <tbody  id="banktable">
                            </tbody> 
                        </table>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Client" className="btn btn-primary"/>
                    </div>
                </form>
                <footer className="footer"><i style={{color:"red"}}># It is stored normally may be risky</i></footer>
            </div>
        )
    }
}
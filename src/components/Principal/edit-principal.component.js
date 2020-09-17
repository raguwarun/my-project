import React, { Component } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";

export default class CreatePrincipal extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangemembership = this.onChangemembership.bind(this);
        this.onChangeMemberName = this.onChangeMemberName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangebirthdate = this.onChangebirthdate.bind(this);
        this.onChangepassdate = this.onChangepassdate.bind(this);
        this.onChangejoindate = this.onChangejoindate.bind(this);
        this.onChangeexitdate = this.onChangeexitdate.bind(this);
        this.onChangeMobilenum = this.onChangeMobilenum.bind(this);
        this.onChangeMemberpan = this.onChangeMemberpan.bind(this);
        this.onChangemembermail = this.onChangemembermail.bind(this);
        this.onChanegAddress = this.onChanegAddress.bind(this);

        this.state = {
            membershipno : '',
            membername : '',
            memberpan : '',
            password : '',
            birthdate : new Date(),
            passdate : new Date(),
            joindate : new Date(),
            exitdate : '',
            mobilenum : '',
            memberemail : '',
            memaddress : '',
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/principals/" + this.props.match.params.id)
            .then(resp => {
                this.setState({
                membershipno : resp.data.membershipno,
                membername : resp.data.membername,
                memberpan : resp.data.memberpan,
                birthdate : new Date(resp.data.birthdate),
                passdate : new Date(resp.data.passdate),
                joindate : new Date(resp.data.joindate),
                exitdate : new Date(resp.data.exitdate),
                mobilenum : resp.data.mobilenum,
                memberemail : resp.data.memberemail,
                memaddress : resp.data.memaddress,
                });
                console.log(resp.data);
            })
            .catch(err => {console.log(err);})
        
        }

    onChangemembership(e){this.setState({membershipno : e.target.value});}
    onChangeMemberName(e){this.setState({membername : e.target.value});}
    onChangePassword(e) {this.setState({password : e.target.value});}
    onChangebirthdate(date){this.setState({birthdate : date});}
    onChangepassdate(date){this.setState({passdate : date});}
    onChangejoindate(date){this.setState({joindate : date});}
    onChangeexitdate(date){this.setState({exitdate : date});}
    onChangeMobilenum(e) {this.setState({mobilenum : e.target.value});}
    onChangeMemberpan(e) {this.setState({memberpan : e.target.value});}
    onChangemembermail(e) {this.setState({memberemail : e.target.value});}
    onChanegAddress(e) {this.setState({memaddress : e.target.value});}

    onSubmit(e) {
        e.preventDefault();
        
        const newPrincipal = {
            membershipno: this.state.membershipno,
            membername: this.state.membername,
            memberpan: this.state.memberpan,
            birthdate: new Date(this.state.birthdate),
            passdate: new Date(this.state.passdate),
            joindate: new Date(this.state.joindate),
            exitdate: new Date(this.state.exitdate),
            mobilenum: this.state.mobilenum,
            memberemail: this.state.memberemail,
            memaddress: this.state.memaddress,
        }

        const newUser = {
            name : this.state.membername,
            status : "Principal",
            loginid : this.state.membershipno,
            password : this.state.password,
        }

        console.log(newPrincipal);
        console.log(newUser);

        axios.post('http://localhost:5000/principals/update/' + this.props.match.params.id, newPrincipal)
            .then(res => console.log(res.data));
        
            axios.post("http://localhost:5000/users/add", newUser)
            .then(res => console.log(res.data));

        this.setState({
            membershipno : '',
            membername : '',
            password : '',
            memberpan : '',
            birthdate : new Date(),
            passdate : new Date(),
            joindate : new Date(),
            exitdate : '',
            mobilenum : '',
            memberemail : '',
            memaddress : '',
        });
    }
    render(){
        return(
            <div>
                <h3>Create Principal</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Membership No.<b style={{color:"red"}}>*</b> :</label>
                        <input required type="text" className="form-control" value={this.state.membershipno} onChange={this.onChangemembership} />
                    </div>
                    <div className="form-group">
                        <label>Name of Principal<b style={{color:"red"}}>*</b> :</label>
                        <input required type="text" className="form-control" value={this.state.membername} onChange={this.onChangeMemberName} />
                    </div>
                    <div className="form-group">
                        <label>Desired Password<b style={{color:"red"}}>*</b> :</label>
                        <input required type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div className="form-group">
                        <label>Permanent Account Number (PAN)<b style={{color:"red"}}>*</b> :<b style={{color:"red"}}>*</b> :</label>
                        <input required type="text" className="form-control" value={this.state.memberpan} onChange={this.onChangeMemberpan} />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth<b style={{color:"red"}}>*</b> :</label>
                        <div><DatePicker required className="form-control" selected={this.state.birthdate} onChange={this.onChangebirthdate}></DatePicker></div>
                    </div>
                    <div className="form-group">
                        <label>Date of Membership<b style={{color:"red"}}>*</b> :</label>
                        <div><DatePicker required className="form-control" selected={this.state.passdate} onChange={this.onChangepassdate}></DatePicker></div>
                    </div>
                    <div className="form-group">
                        <label>Date of Joining<b style={{color:"red"}}>*</b> :</label>
                        <div><DatePicker required className="form-control" selected={this.state.joindate} onChange={this.onChangejoindate}></DatePicker></div>
                    </div>
                    <div className="form-group">
                        <label>Date of Exit</label>
                        <div><DatePicker className="form-control" selected={this.state.exitdate} onChange={this.onChangeexitdate}></DatePicker></div>
                    </div>
                    <div className='form-group'>
                    <label>Mobile Number<b style={{color:"red"}}>*</b> :</label>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">+91</span>
                        </div>
                        <input type="num" required className="form-control" min="6666666666" max="9999999999" value={this.state.mobilenum} onChange={this.onChangeMobilenum}  />
                        </div>
                    </div>
                    <div className='form-group'>
                    <label>E-Mail ID<b style={{color:"red"}}>*</b> :</label>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="email" required className="form-control" value={this.state.memberemail} onChange={this.onChangemembermail} placeholder="can provide multiple emails with comma as seperator......" multiple />
                        </div>
                    </div>
                    <div className="form-group">
                    <label>Address<b style={{color:"red"}}>*</b> :</label>
                    <textarea required className="form-control" value={this.state.memaddress} onChange={this.onChanegAddress} placeholder="Provide Address...." ></textarea>
                    </div>
                    <div className="form-group row">
                    <div className="col-md-2">
                     <input type="submit" value="Update Principal" className="btn btn-primary" />
                    </div>
                    <div className="col-md-10">
                     <a href="/prof/" className="btn btn-secondary">Edit Cancel</a>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
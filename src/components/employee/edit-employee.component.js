import React, { Component } from "react"
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePrincipal extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeEmpfatherName = this.onChangeEmpfatherName.bind(this);
        this.onChangebirthdate = this.onChangebirthdate.bind(this);
        this.onChangejoindate = this.onChangejoindate.bind(this);
        this.onChangeexitdate = this.onChangeexitdate.bind(this);
        this.onChangeMobilenum = this.onChangeMobilenum.bind(this);
        this.onChangeEmployeepan = this.onChangeEmployeepan.bind(this);
        this.onChangeEmployeeMail = this.onChangeEmployeeMail.bind(this);
        this.onChanegAddress = this.onChanegAddress.bind(this);
        this.onChangeDetails = this.onChangeDetails.bind(this);

        this.state = {
            employeename : '',
            empfathername : '',
            employeepan : '',
            birthdate : new Date(),
            joindate : new Date(),
            exitdate : '',
            mobilenum : '',
            employeeemail : '',
            employeeaddress : '',
            employeedetails : '',
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/employees/" + this.props.match.params.id)
            .then(resp => {
                this.setState({
                    employeename : resp.data.employeename,
                    empfathername : resp.data.empfathername,
                    employeepan : resp.data.employeepan,
                    birthdate : Date.parse(resp.data.birthdate),
                    joindate : Date.parse(resp.data.joindate),
                    exitdate : Date.parse(resp.data.exitdate),
                    mobilenum : resp.data.mobilenum,
                    employeeemail : resp.data.employeeemail,
                    employeeaddress : resp.data.employeeaddress,
                    employeedetails : resp.data.employeedetails,
                })
            })
            .catch((err) => {console.log(err);})
    }

    onChangeEmployeeName(e){this.setState({employeename : e.target.value});}
    onChangeEmpfatherName(e){this.setState({empfathername : e.target.value});}
    onChangebirthdate(date){this.setState({birthdate : date});}
    onChangejoindate(date){this.setState({joindate : date});}
    onChangeexitdate(date){this.setState({exitdate : date});}
    onChangeMobilenum(e) {this.setState({mobilenum : e.target.value});}
    onChangeEmployeepan(e) {this.setState({employeepan : e.target.value});}
    onChangeEmployeeMail(e) {this.setState({employeeemail : e.target.value});}
    onChanegAddress(e) {this.setState({employeeaddress : e.target.value});}
    onChangeDetails(e) {this.setState({employeedetails : e.target.value});}

    onSubmit(e) {
        e.preventDefault();

        const newEmployee = {
            employeename : this.state.employeename,
            empfathername : this.state.empfathername,
            employeepan : this.state.employeepan,
            birthdate : new Date(this.state.birthdate),
            joindate : new Date(this.state.joindate),
            exitdate : this.state.exitdate,
            mobilenum : this.state.mobilenum,
            employeeemail : this.state.employeeemail,
            employeeaddress : this.state.employeeaddress,
            employeedetails : this.state.employeedetails,
        }

        console.log(newEmployee);

        axios.post('http://localhost:5000/employees/update/' + this.props.match.params.id, newEmployee)
            .then(res => console.log(res.data));
        window.location = '/employee/' 
/*         this.setState({
            employeename : '',
            empfathername : '',
            employeepan : '',
            birthdate : new Date(),
            joindate : new Date(),
            exitdate : '',
            mobilenum : '',
            employeeemail : '',
            employeeaddress : '',
            employeedetails : '',
        }); */
    }
    render(){
        return(
            <div>
                <h3>Create Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Employee Name<b style={{color:"red"}}>*</b> :</label>
                        <input required type="text" className="form-control" value={this.state.employeename} onChange={this.onChangeEmployeeName} />
                    </div>
                    <div className="form-group">
                        <label>Father/Mother/Guardian Name<b style={{color:"red"}}>*</b> :</label>
                        <input required type="text" className="form-control" value={this.state.empfathername} onChange={this.onChangeEmpfatherName} />
                    </div>
                    <div className="form-group">
                        <label>Permanent Account Number (PAN)<b style={{color:"red"}}>*</b> :<b style={{color:"red"}}>*</b> :</label>
                        <input required type="text" className="form-control" value={this.state.employeepan} onChange={this.onChangeEmployeepan} />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth<b style={{color:"red"}}>*</b> :</label>
                        <div><DatePicker required className="form-control" selected={this.state.birthdate} onChange={this.onChangebirthdate}></DatePicker></div>
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
                        <input type="num" required className="form-control" value={this.state.mobilenum} onChange={this.onChangeMobilenum}  />
                        </div>
                    </div>
                    <div className='form-group'>
                    <label>E-Mail ID<b style={{color:"red"}}>*</b> :</label>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="email" required className="form-control" value={this.state.employeeemail} onChange={this.onChangeEmployeeMail} placeholder="can provide multiple emails with comma as seperator......" multiple />
                        </div>
                    </div>
                    <div className="form-group">
                    <label>Address <b style={{color:"red"}}>*</b> :</label>
                    <textarea required className="form-control" value={this.state.employeeaddress} onChange={this.onChanegAddress} placeholder="Provide Address...." ></textarea>
                    </div>
                    <div className="form-group">
                    <label>Remarks :</label>
                    <textarea className="form-control" value={this.state.employeedetails} onChange={this.onChangeDetails}></textarea>
                    </div>
                    <div className="form-group row">
                    <div className="col-md-2">
                     <input type="submit" value="Update Employee" className="btn btn-primary" />
                    </div>
                    <div className="col-md-10">
                     <a href="/employee/" className="btn btn-secondary">Edit Cancel</a>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
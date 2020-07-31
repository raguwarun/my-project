import React, { Component } from "react"
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePrincipal extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeRegistrtionnum = this.onChangeRegistrtionnum.bind(this);
        this.OnChangeArticlename = this.OnChangeArticlename.bind(this);
        this.onChangemembername = this.onChangemembername.bind(this);
        this.onChangebirthdate = this.onChangebirthdate.bind(this);
        this.onChangepassdate = this.onChangepassdate.bind(this);
        this.onChangejoindate = this.onChangejoindate.bind(this);
        this.onChangeexitdate = this.onChangeexitdate.bind(this);
        this.onChangeMobilenum = this.onChangeMobilenum.bind(this);
        this.onChangemembermail = this.onChangemembermail.bind(this);
        this.onChangeotherdetails = this.onChangeotherdetails.bind(this);
        this.onChanegAddress = this.onChanegAddress.bind(this);

        this.state = {
            registrationnum : '',
            articlename : '',
            principalname : '',
            birthdate : new Date(),
            passdate : new Date(),
            joindate : new Date(),
            exitdate : '',
            mobilenum : '',
            articlemail : '',
            articleaddress : '',
            otherdetails : '',
            Principals : [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/articles/' + this.props.match.params.id)
            .then(resp => {
                this.setState({
                    registrationnum : resp.data.registrationnum,
                    articlename : resp.data.articlename,
                    principalname : resp.data.principalname,
                    birthdate : Date.parse(resp.data.birthdate),
                    passdate : Date.parse(resp.data.passdate),
                    joindate : Date.parse(resp.data.joindate),
                    exitdate : Date.parse(resp.data.exitdate),
                    mobilenum : resp.data.mobilenum,
                    articlemail : resp.data.articlemail,
                    articleaddress : resp.data.articleaddress,
                    otherdetails : resp.data.otherdetails,
                })
            })
            .catch((err) => {console.log(err);})
        axios.get('http://localhost:5000/principals/')
            .then(resp => {
                if (resp.data.length > 0) {
                    this.setState ({
                        Principals : resp.data.map(principal => principal.membername),
                        principalname : resp.data[0].membername
                    })
                }
            })
            .catch((err) => {console.log(err);})
    }

    onChangeRegistrtionnum(e){this.setState({registrationnum : e.target.value});}
    OnChangeArticlename(e){this.setState({articlename : e.target.value});}
    onChangemembername(e) {this.setState({principalname : e.target.value});}
    onChangebirthdate(date){this.setState({birthdate : date});}
    onChangepassdate(date){this.setState({passdate : date});}
    onChangejoindate(date){this.setState({joindate : date});}
    onChangeexitdate(date){this.setState({exitdate : date});}
    onChangeMobilenum(e) {this.setState({mobilenum : e.target.value});}
    onChangemembermail(e) {this.setState({articlemail : e.target.value});}
    onChanegAddress(e) {this.setState({articleaddress : e.target.value});}
    onChangeotherdetails(e) {this.setState({otherdetails : e.target.value});}

    onSubmit(e) {
        e.preventDefault();

        const newArticle = {
            registrationnum : this.state.registrationnum,
            articlename : this.state.articlename,
            principalname : this.state.principalname,
            birthdate : new Date(this.state.birthdate),
            passdate : new Date(this.state.passdate),
            joindate : new Date(this.state.joindate),
            exitdate : new Date(this.state.exitdate),
            mobilenum : this.state.mobilenum,
            articlemail : this.state.articlemail,
            articleaddress : this.state.articleaddress,
            otherdetails : this.state.otherdetails,
        }

        console.log(newArticle);
        
        axios.post('http://localhost:5000/articles/update/' + this.props.match.params.id, newArticle)
            .then(res => console.log(res.data));

        this.setState({
            registrationnum : '',
            articlename : '',
            principalname: '',
            birthdate : new Date(),
            passdate : new Date(),
            joindate : new Date(),
            exitdate : '',
            mobilenum : '',
            articlemail : '',
            articleaddress : '',
            otherdetails : '',
        });
    }
    render(){
        return(
            <div>
                <h3>Edit Article</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Registration No.<b style={{color:"red"}}>*</b> :</label>
                        <input required type="text" className="form-control" value={this.state.registrationnum} onChange={this.onChangeRegistrtionnum} />
                    </div>
                    <div className="form-group">
                        <label>Name of Article<b style={{color:"red"}}>*</b> :</label>
                        <input required type="text" className="form-control" value={this.state.articlename} onChange={this.OnChangeArticlename} />
                    </div>
                    <div className="form-group">
                        <label>Principal Name<b style={{color:"red"}}>*</b> :</label>
                        <select required className="form-control" value={this.state.principalname} onChange={this.onChangemembername} >
                        <option key="" value="" ></option>
                        {
                            this.state.Principals.map(function(group) {
                                return <option key={group} value={group} >{group}</option>
                            })
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date of Birth<b style={{color:"red"}}>*</b> :</label>
                        <div><DatePicker required className="form-control" selected={this.state.birthdate} onChange={this.onChangebirthdate}></DatePicker></div>
                    </div>
                    <div className="form-group">
                        <label>Date of Pass Date<b style={{color:"red"}}>*</b> :</label>
                        <div><DatePicker required className="form-control" selected={this.state.passdate} onChange={this.onChangepassdate}></DatePicker></div>
                    </div>
                    <div className="form-group">
                        <label>Date of Joining<b style={{color:"red"}}>*</b> :</label>
                        <div><DatePicker required className="form-control" selected={this.state.joindate} onChange={this.onChangejoindate}></DatePicker></div>
                    </div>
                    <div className="form-group">
                        <label>Date of Termination</label>
                        <div><DatePicker className="form-control" selected={this.state.exitdate} onChange={this.onChangeexitdate}></DatePicker></div>
                    </div>
                    <div className='form-group'>
                    <label>Mobile Number<b style={{color:"red"}}>*</b> :</label>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">+91</span>
                        </div>
                        <input type="tel" required className="form-control" value={this.state.mobilenum} onChange={this.onChangeMobilenum}  />
                        </div>
                    </div>
                    <div className='form-group'>
                    <label>E-Mail ID<b style={{color:"red"}}>*</b> :</label>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="email" required className="form-control" value={this.state.articlemail} onChange={this.onChangemembermail} placeholder="can provide multiple emails with comma as seperator......" multiple />
                        </div>
                    </div>
                    <div className="form-group">
                    <label>Address<b style={{color:"red"}}>*</b> :</label>
                    <textarea required className="form-control" value={this.state.articleaddress} onChange={this.onChanegAddress} placeholder="Provide Address...." ></textarea>
                    </div>
                    <div className="form-group">
                    <label>Remarks<b style={{color:"red"}}>*</b> :</label>
                    <textarea className="form-control" value={this.state.otherdetails} onChange={this.onChangeotherdetails} placeholder="Provide Address...." ></textarea>
                    </div>

                    <div className="form-group row">
                    <div className="col-md-2">
                     <input type="submit" value="Update Article" className="btn btn-primary" />
                    </div>
                    <div className="col-md-10">
                     <a href="/article/" className="btn btn-secondary">Edit Cancel</a>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
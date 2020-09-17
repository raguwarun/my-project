import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeworktype = this.onChangeworktype.bind(this);
    this.onChangePrincipalname = this.onChangePrincipalname.bind(this);
    this.onChangeArticlename = this.onChangeArticlename.bind(this);
    this.onChangeWorkCompleted = this.onChangeWorkCompleted.bind(this);
    this.onChangeAllotedDate = this.onChangeAllotedDate.bind(this);
    this.onChangeEngagementLetter = this.onChangeEngagementLetter.bind(this);
    this.onChangeperiod = this.onChangeperiod.bind(this);
    this.onChangeTargetDate = this.onChangeTargetDate.bind(this);
    this.onChangeUdin=this.onChangeUdin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      worktype: '',
      principalname : '',
      articlename: [],
      period: '',
      alloteddate : new Date(),
      engagementletter : '',
      targetdate: new Date(),
      workCompleted : 'No',
      udin:'',
      users: [],
      principals : [],
      articles :[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/clients/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users : response.data.map(user => user.username),
                    username : response.data[0].username
                });
            }
        })
        .catch((error) => {console.log(error);});

    axios.get('http://localhost:5000/principals/')
    .then(response => {
        if (response.data.length > 0) {
            this.setState({
              principals : response.data.map(principal => principal.membershipno + "-" + principal.membername),
              membername : response.data[0].membername
            });
        }
    })
    .catch((error) => {console.log(error);});

    axios.get('http://localhost:5000/articles/')
    .then(response => {
        if (response.data.length > 0) {
            this.setState({
              articles : response.data.map(article => article.registrationnum + "-" + article.articlename),
              articlename : response.data[0].articlename
            });
        }
    })
    .catch((error) => {console.log(error);});
  }

  onChangeUsername(e) {this.setState({username: e.target.value});}
  onChangeworktype(e) {this.setState({worktype: e.target.value});}
  onChangeAllotedDate(date) {this.setState({alloteddate : date});}
  onChangeEngagementLetter(e) {this.setState({engagementletter : e.target.value});}
  onChangeperiod(e) {this.setState({period: e.target.value});}
  onChangePrincipalname(e) {this.setState({principalname:e.target.value})}
  onChangeTargetDate(date) {this.setState({targetdate: date});}
  onChangeUdin(e){this.setState({udin : e.target.value});}
  onChangeWorkCompleted(e) {this.setState({workCompleted : e.target.value});
    if(e.target.value == "Yes"){document.getElementById("udinReg").setAttribute("required",'');}
    else{document.getElementById("udinReg").removeAttribute("required",'');}
  }
  onChangeArticlename(e) {
    var listart = [];
    for (var i=0 ; i<e.target.options.length; i++){
      if(e.target.options[i].selected == true){
        listart.push(e.target.options[i].value);
      }
    }
    this.setState({articlename : listart});
  }
  onSubmit(e) {
    e.preventDefault();
  
    const exercise = {
        username : this.state.username,
        worktype : this.state.worktype,
        principalname:this.state.principalname,
        articlename : this.state.articlename,
        alloteddate : this.state.alloteddate,
        engagementletter : this.state.engagementletter,
        targetdate : this.state.targetdate,
        period : this.state.period,
        workCompleted: this.state.workCompleted,
        udin : this.state.udi,
    };
  
    console.log(exercise);
    
     axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));
    window.location = '/assignment/';
  }

  render() {
    return (
      <div>
        <h3>Assignment Scheduling</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>ClientName<b style={{color:"red"}}>*</b> : </label>
            <select required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
                {this.state.users.map(function(user) {return <option key={user} value={user}>{user}</option>;})}
            </select>
          </div>
          <div className="form-group"> 
            <label>worktype<b style={{color:"red"}}>*</b>: </label>
            <input  type="text" required className="form-control" value={this.state.worktype} onChange={this.onChangeworktype} />
          </div>
          <div className="form-group"> 
            <label>Assigned To<b style={{color:"red"}}>*</b> : </label>
            <select required className="form-control" value={this.state.principalname} onChange={this.onChangePrincipalname}>
              {this.state.principals.map(function(principal) {return <option key={principal} value={principal.split("-",1)}>{principal}</option>;})}
            </select>
          </div>
          <div className="form-group"> 
            <label>Audit Team<b style={{color:"red"}}>*</b> : </label>
            <select required className="form-control" multiple value={this.state.articlename} onChange={this.onChangeArticlename}>
              {this.state.articles.map(function(article) {return <option key={article} value={article.split("-",1)}>{article}</option>;})}
            </select>
          </div>
          <div className="form-group">
            <label>engagement Letter: </label>
            <input type="text" className="form-control" value={this.state.engagementletter} onChange={this.onChangeEngagementLetter} />
          </div>
          <div className="form-group">
            <label>Term of Audit: </label>
            <input type="text" className="form-control" value={this.state.period} onChange={this.onChangeperiod} />
          </div>
          <div className="form-group">
            <label>Alloted Date<b style={{color:"red"}}>*</b>: </label>
            <div>
              <DatePicker required selected={this.state.alloteddate} onChange={this.onChangeAllotedDate} />
            </div>
          </div>
          <div className="form-group">
            <label>Target Date<b style={{color:"red"}}>*</b>: </label>
            <div>
              <DatePicker required selected={this.state.targetdate} onChange={this.onChangeTargetDate} />
            </div>
          </div>
          <div className="form-group">
            <label>Work Completed : </label>
              <select type="text" className="form-control" selected={this.state.workCompleted} onChange={this.onChangeWorkCompleted}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>            
          </div>
          <div className="form-group">
            <label>UDIN<b style={{color:"red"}}>* <i><sup>if work completed</sup></i></b> : </label>
              <input type="text" className="form-control" id="udinReg" selected={this.state.udin} onChange={this.onChangeUdin} minLength={18} maxLength={18} />          
          </div>

          <div className="form-group">
            <input type="submit" value="Create Assignment" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
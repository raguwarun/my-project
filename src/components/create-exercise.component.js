import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeworktype = this.onChangeworktype.bind(this);
    this.onChangeAllotedDate = this.onChangeAllotedDate.bind(this);
    this.onChangeEngagementLetter = this.onChangeEngagementLetter.bind(this);
    this.onChangeperiod = this.onChangeperiod.bind(this);
    this.onChangeTargetDate = this.onChangeTargetDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      worktype: '',
      period: '',
      alloteddate : new Date(),
      engagementletter : '',
      targetdate: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users : response.data.map(user => user.username),
                    username : response.data[0].username
                });
            }
        })
        .catch((error) => {console.log(error);})
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeworktype(e) {
    this.setState({
      worktype: e.target.value
    });
  }

  onChangeAllotedDate(date) {
    this.setState({
        alloteddate : date
    });
  }

  onChangeEngagementLetter(e) {
      this.setState({
          engagementletter : e.target.value
      });
  }

  onChangeperiod(e) {
    this.setState({
      period: e.target.value
    });
  }

  onChangeTargetDate(date) {
    this.setState({
      targetdate: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const exercise = {
        username : this.state.username,
        worktype : this.state.worktype,
        alloteddate : this.state.alloteddate,
        engagementletter : this.state.engagementletter,
        targetdate : this.state.targetdate,
        period : this.state.period,
    };
  
    console.log(exercise);
    
    axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Assignment Scheduling</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>worktype: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.worktype}
                onChange={this.onChangeworktype}
                />
          </div>
          <div className="form-group">
            <label>engagement Letter: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.engagementletter}
                onChange={this.onChangeEngagementLetter}
                />
          </div>
          <div className="form-group">
            <label>Term of Audit: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.period}
                onChange={this.onChangeperiod}
                />
          </div>
          <div className="form-group">
            <label>Alloted Date: </label>
            <div>
              <DatePicker
                selected={this.state.alloteddate}
                onChange={this.onChangeAllotedDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Target Date: </label>
            <div>
              <DatePicker
                selected={this.state.targetdate}
                onChange={this.onChangeTargetDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Assignment" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
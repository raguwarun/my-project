import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateGroup extends Component {
  constructor(props) {
    super(props);

    this.onChangegroupname = this.onChangegroupname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      groupname: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/groups/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                groupname: response.data.groupname,
            })
        })
        .catch((error) => {console.log(error);})
  }

  onChangegroupname(e) {
    this.setState({
      groupname: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const Group = {
        groupname : this.state.groupname,
    };
  
    console.log(Group);
    
    axios.post('http://localhost:5000/groups/update/'+this.props.match.params.id, Group)
        .then(res => console.log(res.data));
    window.location = '/group/';
  }

  render() {
    return (
      <div>
        <h3>Create Group</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>GroupName : </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.groupname}
                onChange={this.onChangegroupname}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Update Group" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
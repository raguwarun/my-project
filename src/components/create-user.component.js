import React, { Component } from "react";
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            status : ''
        }
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

    onSubmit(e) {
        e.preventDefault();
        
        const newUser = {
            username : this.state.username,
            status : this.state.status
        }
        console.log(newUser);
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));
            
        this.setState({
            username : '',
            status : ''
        });
    }

    render(){
        return(
            <div>
                <h3>Create New Client</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Client Name :</label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className='form-group'>
                        <label>Status :</label>
                        <input type="text" required className="form-control" value={this.state.status} onChange={this.onChangeStatus} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Client" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
import React, { Component } from "react";
import axios from "axios";

export default class CreateGroup extends Component {
    constructor(props) {
        super(props);

        this.onChangegroupname = this.onChangegroupname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            groupname : ''
        }
    }

    onChangegroupname(e) {
        this.setState ({
            groupname : e.target.value
        });
    }

    onSubmit(e) {
        e.prevenrDefault();

        const newGroup = {
            groupname : this.state.groupname,
        }
        console.log(newGroup);
        
        axios.post("https://localhost:5000/groups/add", newGroup)
            .then(res => console.log(res.data));
        
        this.setState ({
            groupname : ''
        });
    }

    render(){
        return(
            <div>
                <h3>Create Group</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Group Name <b style={{color:"red"}}>*</b> :</label>
                        <input type="text" className="form-control" value={this.state.groupname} onChange={this.onChangegroupname} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Group" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
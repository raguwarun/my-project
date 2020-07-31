import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.worktype}</td>
        <td>{props.exercise.alloteddate.substring(0,10)}</td>
        <td>{props.exercise.engagementletter}</td>
        <td>{props.exercise.targetdate.substring(0,10)}</td>
        <td>{props.exercise.period}</td>
        <td>
            <Link to ={"/assignment/edit/" + props.exercise._id}>edit</Link> | 
            <a href="/assignment/" onClick={() => {props.deleteExercise(props.exercise._id)}}>delete</a>
        </td>
    </tr>
)

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {exercises : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({exercises : response.data});
            })
        .catch((error) => {console.log(error);})
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));
        this.setState({
            exercises : this.state.exercises.filter(el => el._id !==id)
        })
    }

    exercisesList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
        })
    }

    render () {
        return(
            <div>
                <h3>Assignment List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Work Type</th>
                            <th>Alloted Date</th>
                            <th>Engagement Letter</th>
                            <th>Target Date</th>
                            <th>Period</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exercisesList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
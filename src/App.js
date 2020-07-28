import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercise/exercises-list.component";
import EditExercise from "./components/exercise/edit-exercise.component";
import CreateExercise from "./components/exercise/create-exercise.component";
import CreateUser from "./components/Client/create-user.component";
import UserList from "./components/Client/user.list.component";

import CreateGroup from "./components/Groups/create-group.component";
import GroupList from "./components/Groups/group-list.component";
import EditGroup from "./components/Groups/edit-group.component";

function App() {
  return (
    <Router>
    <div className="container">
        <Navbar />
        <br/>
        <Route path="/assignment/" exact component={ExercisesList} />
        <Route path="/assignment/edit/:id" exact component={EditExercise} />
        <Route path="/assignment/create" exact component={CreateExercise} />
        <Route path="/user/create" exact component={CreateUser} />
        <Route path="/user/" exact component={UserList} />
        <Route path="/group/create" exact component={CreateGroup} />
        <Route path="/group" exact component={GroupList} />
        <Route path="/group/edit/:id" exact component={EditGroup} />
    </div>
    </Router>
  );
}

export default App;
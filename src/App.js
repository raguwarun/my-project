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
import EditUser from "./components/Client/edit-user.component";
import CreateGroup from "./components/Groups/create-group.component";
import GroupList from "./components/Groups/group-list.component";
import EditGroup from "./components/Groups/edit-group.component";
import CreateProf from "./components/Principal/create-principal.component";
import ProfList from "./components/Principal/principal-list.component";
import EditProf from "./components/Principal/edit-principal.component";
import CreateArticle from "./components/Article/create-article.component";
import ArticleList from "./components/Article/article-list.component";
import EditArticle from "./components/Article/edit-article.component";
import CreateEmployee from "./components/employee/create-employee.component";
import EmployeeList from "./components/employee/employee-list.component";
import EditEmployee from "./components/employee/edit-employee.component";

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
        <Route path="/users/edit/:id" exact component={EditUser} />
        <Route path="/group/create" exact component={CreateGroup} />
        <Route path="/group" exact component={GroupList} />
        <Route path="/group/edit/:id" exact component={EditGroup} />
        <Route path="/prof/create/" exact component={CreateProf} />
        <Route path="/prof/" exact component={ProfList} />
        <Route path="/prof/edit/:id" exact component={EditProf} />   
        <Route path="/article/create/" exact component={CreateArticle} />
        <Route path="/article/" exact component={ArticleList} />     
        <Route path="/article/edit/:id" exact component={EditArticle} />
        <Route path="/employee/create/" exact component={CreateEmployee} />
        <Route path="/employee/edit/:id" exact component={EditEmployee} />
        <Route path="/employee/" exact component={EmployeeList} />
    </div>
    </Router>
  );
}

export default App;
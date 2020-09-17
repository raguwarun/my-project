import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/navbar.component";
import ExercisesList from "./components/exercise/exercises-list.component";
import EditExercise from "./components/exercise/edit-exercise.component";
import CreateExercise from "./components/exercise/create-exercise.component";
import CreateClient from "./components/Client/create-client.component";
import ClientList from "./components/Client/client-list.component";
import EditClient from "./components/Client/edit-client.component";
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
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/layout/PrivateRoute";
import SignedBy from "./components/Templates/SignedBy";
//import Landing from "./components/layout/landing.component";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
   <Provider store={store}>
    <Router>
    <div className="container">
        <Navbar />
        <br/>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Login} />
        <switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/assignment/" exact component={ExercisesList} />
          <PrivateRoute path="/assignment/edit/:id" exact component={EditExercise} />
          <PrivateRoute path="/assignment/create" exact component={CreateExercise} />
          <PrivateRoute path="/client/create" exact component={CreateClient} />
          <PrivateRoute path="/client/" exact component={ClientList} />
          <PrivateRoute path="/client/edit/:id" exact component={EditClient} />
          <PrivateRoute path="/group/create" exact component={CreateGroup} />
          <PrivateRoute path="/group" exact component={GroupList} />
          <PrivateRoute path="/group/edit/:id" exact component={EditGroup} />
          <PrivateRoute path="/prof/create/" exact component={CreateProf} />
          <PrivateRoute path="/prof/" exact component={ProfList} />
          <PrivateRoute path="/prof/edit/:id" exact component={EditProf} />   
          <PrivateRoute path="/article/create/" exact component={CreateArticle} />
          <PrivateRoute path="/article/" exact component={ArticleList} />     
          <PrivateRoute path="/article/edit/:id" exact component={EditArticle} />
          <PrivateRoute path="/employee/create/" exact component={CreateEmployee} />
          <PrivateRoute path="/employee/edit/:id" exact component={EditEmployee} />
          <PrivateRoute path="/employee/" exact component={EmployeeList} />
          <PrivateRoute path="/templates" exact component={SignedBy} />
        </switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render (){
        return(
            <div>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <Link to="/assignment/" className="navbar-brand">Home</Link>
                <div className="ncollpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/assignment/" className="nav-link">List</Link>
                        </li>
                        <li className="navbar-item dropdown mydropdown">
                            <Link to="/assignment/create" className="nav-link dropdown-toggle">Assignments</Link>
                            <div className="dropdown-menu mydropdown-content">
                                <Link to="/assignment/create" className="dropdown-item">Add Assignment</Link>
                                <Link to="/assignment/" className="dropdown-item">Edit Assignment</Link>
                                <Link to="/assignment/" className="dropdown-item">View Assignment</Link>
                            </div>
                        </li>
                        <li className="navbar-item dropdown mydropdown">
                            <Link to="#" className="nav-link dropdown-toggle">Master</Link>
                            <div className="dropdown-menu mydropdown-content">
                            <div className="dropdown-header">Client</div>
                                <Link to="/user/create" className="dropdown-item">Add Client</Link>
                                <Link to="/user/" className="dropdown-item">Edit Client</Link>
                                <Link to="/user/" className="dropdown-item">View Client</Link>
                            <div className="divider"></div>
                            <div className="dropdown-header">Client Group</div>
                                <Link to="/group/create" className="dropdown-item">Add Group</Link>
                                <Link to="/group/" className="dropdown-item">Edit Group</Link>
                                <Link to="/group" className="dropdown-item">View Group</Link>
                            </div>
                        </li>
                        <li className="navbar-item dropdown mydropdown">
                            <Link to="#" className="nav-link dropdown-toggle">Resources</Link>
                            <div className="dropdown-menu mydropdown-content">
                                <div className="dropdown-header">Principal</div>
                                    <Link to="/prof/create" className="dropdown-item">Add Principal</Link>
                                    <Link to="/prof/" className="dropdown-item">Edit Principal</Link>
                                    <Link to="/prof/" className="dropdown-item">View Principal</Link>
                                <div className="divider"></div>
                                <div className="dropdown-header">Articles</div>
                                    <Link to="/article/create" className="dropdown-item">Add Article</Link>
                                    <Link to="/article" className="dropdown-item">Edit Article</Link>
                                    <Link to="/article" className="dropdown-item">View article</Link>
                                <div className="dropdown-header">Employee</div>
                                    <Link to="/employee/create" className="dropdown-item">Add Employee</Link>
                                    <Link to="/employee" className="dropdown-item">Edit Employee</Link>
                                    <Link to="/employee" className="dropdown-item">View Employee</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
          </div>
        )
    }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            loginid : "",
            password : "",
            errors : {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard")
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard") //push user to navigation page on user login
        }
        if (nextProps.errors) {
            this.setState ({errors : nextProps.errors});
        }
    }

    onChange(e) {
        this.setState ({[e.target.id] : e.target.value});
    };
    onSubmit(e) {
        e.preventDefault();
        const userData = {
            loginid : this.state.loginid,
            password : this.state.password
        };

        this.props.loginUser(userData); 
        /* since we handle the redirect within our component from authActions.js, 
        we don't need to pass in this.props.history as a parameter*/
    }

    render(){
        const { errors } = this.state;
        return(
            <div className="container">
                    <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Login ID</label>
                        <input
                        required
                        onChange={this.onChange}
                        value={this.state.loginid}
                        error={errors.loginid}
                        id="loginid"
                        className="form-control"
                        type="text"
                        autoFocus="true"
                        className = {classnames("", {invalid : errors.usernotfound})}
                        />
                        <span className="text-danger"><i>{errors.usernotfound}</i></span>
                    </div>
                    <div className="form-group">
                        <label>User Password</label>
                        <input
                        required
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        className="form-control"
                        type="password"
                        className = {classnames("", {invalid : errors.passwordincorrect})}
                        />
                        <span className="text-danger">{errors.passwordincorrect}</span>
                    </div>
                    <div className="form-group">
                        <input
                        type="submit"
                        className="btn btn-primary"
                        />
                    </div>
                    </form>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: propTypes.func.isRequired,
    auth : propTypes.object.isRequired,
    errors : propTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth : state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {loginUser}
)(Login);
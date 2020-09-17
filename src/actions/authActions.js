import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, USER_LOADING, SET_CURRENT_USER } from "./types";

//Login - get user token
export const loginUser = userData => dispatch => {
    axios.post("http://localhost:5000/users/login", userData)
    .then(res => {
        const {token} = res.data;
        localStorage.setItem("jwtToken", token)    // save to local storage set token to local storage
        setAuthToken(token);                       //set token to Auth header
        const decoded = jwt_decode(token);         // Decode token to get user data
        dispatch(setCurrentUser(decoded));         // set current user 
    })
    .catch(err => {
        dispatch({type : GET_ERRORS, payload : err.response.data})
    })
};

// set logged in current user
export const setCurrentUser = decoded => {
    return {type: SET_CURRENT_USER, payload : decoded};
};

//User Loading
export const setUserLoading = () => {
    return { type : USER_LOADING };
};

// User LogOut
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken"); // removing token from local storage
    setAuthToken(false);                 //remove Auth header form future rquests
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
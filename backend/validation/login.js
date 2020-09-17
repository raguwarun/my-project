const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator
    //functions
        data.loginid = !isEmpty(data.loginid) ? data.loginid : "";
        data.password = !isEmpty(data.password) ? data.password : "";

    // Email Checks
    if(Validator.isEmpty(data.loginid)) {
        errors.loginid = "User Identity field is required";
    }

    // Password Checks
    if(Validator.isEmpty(data.password)) {
        errors.password = "password field is required";
    }

    return {
        errors, isvalid : isEmpty(errors)
    };
};
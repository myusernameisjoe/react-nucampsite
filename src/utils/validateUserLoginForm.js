const validateUserLoginForm = (values) => {
    let errors = {};

    // Check if username is missing
    if (!values.username) {
        errors.username = 'Username is required';
    } else {
        // Check username length
        if (values.username.length < 6 || values.username.length > 15) {
            errors.username = 'Username must be between 6 and 15 characters';
        }
    }

    // Check if password is missing
    if (!values.password) {
        errors.password = 'Password is required';
    } else {
        // Check password length
        if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
    }

    return errors;
};

export default validateUserLoginForm;

function Validation(values){
    let error = {};
    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(values.email === ""){
        error.email = "Emai Should not be empty";
    }else if(!email_pattern.test(values.email)){
        error.email = "Email Didn't match";
    }else{
        error.email = "";
    }

    if(values.password === ""){
        error.password = "password Should not be empty";
    }else if(!password_pattern.test(values.password)){
        error.password = "password Didn't match";
    }else{
        error.password = "";
    }

    return error;
}
export default Validation;
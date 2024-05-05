function Validation(values){
    let error = {};
    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phone_pattern = /^\d{10}$/;

    if(values.name === ""){
        error.name = "Name Should not be empty";
    }else{
        error.name = "";
    }

    if(values.phone === ""){
        error.phone = "phone Should not be empty";
    }else if(!phone_pattern.test(values.phone)){
        error.phone = "Phone Didn't match";
    }else{
        error.phone = "";
    }

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
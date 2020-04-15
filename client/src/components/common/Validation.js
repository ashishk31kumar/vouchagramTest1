export const Validate = (data) => {
    return new Promise((resolve, reject) => {
       let errors = {};
       let formIsValid = true;
 
       // first Name
       if (data.name.length == 0) {
          formIsValid = false;
          errors["name"] = " Name is required!";
          reject(errors)
       }
       if (data.email.length == 0) {
        formIsValid = false;
        errors["email"] = "email is required!";
        reject(errors)
     }
 
    
       
       resolve(formIsValid)
    })
 };
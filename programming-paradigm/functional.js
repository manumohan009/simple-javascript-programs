const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue){
    if(flag === REQUIRED){
        return value.trim().length > 0 // returns true  or false
    }
    if(flag === MIN_LENGTH){
        return value.trim().length > validatorValue; // returns true  or false
    }

}

function getUserInput(inputElementId){ // pure function
    return document.getElementById(inputElementId).value;
}

function createUser(userName, userPassword){
    if(!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)){
        throw new Error('Invalid input')
    }
    return {
        userName: userName,
        password: userPassword
    }
}

function greetUser(user){
    console.log('Hi I am ' + user.userName);
}

function signupHandler(event){
    event.preventDefault();

    const enteredUsername = getUserInput('username');
    const enteredPassword = getUserInput('password');

    try{
        const newUser = createUser(enteredUsername, enteredPassword);
        console.log(newUser);
        greetUser(newUser);
    }catch(err){
        alert(err.message);
    }

}

function connectForm(formId, formSubmitHandler){ // pure function
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler)
}

connectForm('user-input', signupHandler)
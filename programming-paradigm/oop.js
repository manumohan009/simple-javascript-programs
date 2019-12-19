class Validator {

    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';
    
    // static - can call a static method withour instantiating the class
    static validate(value, flag, validatorValue){
        if(flag === this.REQUIRED){
            return value.trim().length > 0 // returns true  or false
        }
        if(flag === this.MIN_LENGTH){
            return value.trim().length > validatorValue;
        }

    }
}

class User {
    constructor(uName, uPassword){
        this.username = uName;
        this.password = uPassword;
    }

    greet(){
        console.log('I am ' + this.username)
    }
}

class UserInputForm {
    constructor(){
        this.form = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');

        this.form.addEventListener('submit', this.signupHandler.bind(this));
    }

    signupHandler(event){
        event.preventDefault();
        const enteredUserName = this.userNameInput.value;
        const enteredPassword = this.passwordInput.value;

        if(
            !Validator.validate(enteredUserName, Validator.REQUIRED) || 
            !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5 )
             ){
            alert('Invalid input !');
            return;
        }

        const newUser = new User(enteredUserName, enteredPassword);
        console.log(newUser);
        newUser.greet();
    }
}

new UserInputForm();    
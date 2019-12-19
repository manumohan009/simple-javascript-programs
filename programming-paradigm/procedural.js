const form = document.getElementById('user-input');

function signupHandler(event){
    event.preventDefault();
    const userNameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const enteredUsername = userNameInput.value;
    const enteredPasseword = passwordInput.value;

    if(enteredUsername.trim().length === 0 ){
        alert('Invalid input - username is required !');
        return;
    }
    if(enteredPasseword.trim().length <= 5 ){
        alert('Invalid input - password must be atleast 6 characters long !');
        return;
    }

    const user = {
        userName: enteredUsername,
        password: enteredPasseword
    }

    console.log(user)
    console.log('Hi, I am ' + user.userName);
}

form.addEventListener('submit', signupHandler );
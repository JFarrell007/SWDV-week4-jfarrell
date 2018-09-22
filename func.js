function thePrompt() {
    prompt("Enter username:", "");
}
function createForm() {
    var login = document.getElementById("login_form");
    var loginForm = document.createElement('form');
    login.appendChild(loginForm);

    var newLine = document.createElement('BR');

    var heading = document.createElement('h2');
    heading.innerHTML = "Login Form";
    loginForm.appendChild(heading);

    loginForm.setAttribute('method', 'post');
    
    var nameLabel = document.createElement('label');
    nameLabel.innerHTML = "Enter Name: ";
    loginForm.appendChild(nameLabel);

    var userName = document.createElement('input');
    userName.setAttribute('type','text');
    userName.setAttribute('name', 'username');
    loginForm.appendChild(userName);
    loginForm.appendChild(newLine)

    var passwordLabel = document.createElement('label');
    passwordLabel.innerHTML = "Enter Password: ";
    loginForm.appendChild(passwordLabel);

    var userPassword = document.createElement('input');
    userPassword.setAttribute('type', 'password');
    userPassword.setAttribute('name', 'password');
    loginForm.appendChild(userPassword);

    var submitField = document.createElement('input');
    submitField.setAttribute('type', 'submit');
    submitField.setAttribute('value', 'Login');
    loginForm.appendChild(submitField);
    
}
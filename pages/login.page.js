const action = require('../actions/elementUtil')

class LoginPage{

    get username(){
        return $("#username_login_2");
    }

    get password(){
        return $("#password_login_2");
    }

    get loginBtn(){
        return $("#loginBtn_2");
    }

    doLogin(username, password){
        action.type(this.username, username);
        action.type(this.password, password);
        action.moveToElement(this.loginBtn)
        action.click(this.loginBtn);
    }

}

module.exports = new LoginPage();
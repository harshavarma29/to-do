import React, {Component} from 'react';

class form extends Component {

    constructor() {
        super();

        this.state = {
            username: "",
            email: "",
            password: "",
            confirm_password: "",
            alert: "",
            emptyEmail: "",
            emptyPassword: "",
            emptyConfirmedPassword: "",
            emptyUsername: ""
        }
    }

    openLogin = () => {
        this.props.selection("login");
        this.setState({
            alert: ""
        })
    }

    openRegister = () => {
        this.props.selection("register");
        this.setState({
            alert: ""
        })
    }

    openPage = () => {
        this.props.selection("To-do List");
    }

    emailLogin = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordLogin = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    userReg = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    emailReg = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordReg = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    confPasswordReg = (event) => {
        this.setState({
            confirm_password: event.target.value
        })
    }

    updateUser = () => {
        if(!(this.state.email.includes("@")) && this.state.email.length!=0) {
            this.setState({
                emptyEmailAlert: <div><span className="empty">include @ and add mail domain name</span><br/></div>
            })
        }
        else if(this.state.email.replace(" ",'')[this.state.email.length-1] === '@' && this.state.email.length!=0) {
            this.setState({
                emptyEmailAlert: <div><span className="empty">Add mail domain name</span><br/></div>
            })
        }
        else {
            this.setState({
                emptyEmailAlert: ""
            })
        }

        if(this.state.email.length === 0) {
            this.setState({
                emptyEmail: <div><span className="empty">Email field is empty</span><br/></div>
            })
        }
        else {
            this.setState({emptyEmail: ""})
        }

        if(this.state.password.length === 0) {
            this.setState({
                emptyPassword: <div><span className="empty">Password field is empty</span><br/></div>
            })
        }
        else {
            this.setState({emptyPassword: ""})
        }

        if(this.state.confirm_password.length === 0) {
            this.setState({
                emptyConfirmedPassword: <div><span className="empty">Confirm password field is empty</span><br/></div>
            })
        }
        else {
            this.setState({emptyConfirmedPassword: ""})
        }

        if(this.state.username.length === 0) {
            this.setState({
                emptyUsername: <div><span className="empty">Username field is empty</span><br/></div>
            })
        }
        else {
            this.setState({emptyUsername: ""})
        }

        if(this.state.password != this.state.confirm_password) {
            this.setState({
                alert: <span className="alert">Password and Confirm password are not same</span>
            })
        } 
        else {
            this.setState({alert: ""})
        }

        if(this.state.email.length >0 &&  this.state.password.length >0 && this.state.confirm_password.length >0 && this.state.username.length>0 && this.state.password === this.state.confirm_password && this.state.email.includes("@")  && this.state.email.replace(" ",'')[this.state.email.length-1] !== '@') {
            fetch("http://localhost:3005/register", {
                "method": "post",
                "headers": {"Content-Type": "application/json"},
                "body": JSON.stringify({
                    "username": this.state.username,
                    "email": this.state.email,
                    "password": this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.length>0) {
                    this.setState({
                        alert: <span className="success">Registration successful</span>
                    })
                }
            })
            .catch(err => console.log(err))
        }
    }

    loginUser = () => {

        if(!(this.state.email.includes("@")) && this.state.email.length!=0) {
            this.setState({
                emptyEmailAlert: <div><span className="empty">include @ and mail domain name</span><br/></div>
            })
        }
        else if(this.state.email.replace(" ",'')[this.state.email.length-1] === '@' && this.state.email.length!=0) {
            this.setState({
                emptyEmailAlert: <div><span className="empty">Add mail domain name</span><br/></div>
            })
        }
        else {
            this.setState({
                emptyEmailAlert: ""
            })
        }

        if(this.state.email.length === 0) {
            this.setState({
                emptyEmail: <div><span className="empty">Email field is empty</span><br/></div>
            })
        }
        else {
            this.setState({emptyEmail: ""})
        }

        if(this.state.password.length === 0) {
            this.setState({
                emptyPassword: <div><span className="empty">Password field is empty</span><br/></div>
            })
        }
        else {
            this.setState({emptyPassword: ""})
        }

        if(this.state.email.length > 0 && this.state.password.length > 0 && this.state.email.includes("@")  && this.state.email.replace(" ",'')[this.state.email.length-1] !== '@') {

            this.props.emailFunction(this.state.email);
            
            fetch("http://localhost:3005/login", {
                "method": "post",
                "headers": {"Content-Type": "application/json"},
                "body": JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.length > 0) {
                
                    this.props.user(data[0].username);
                    this.props.selection("Lists");
                }
                else {
                    this.setState({
                        alert: <span className="alert">Invalid username or password</span>
                    })
                }
            })
            .catch(err => console.log(err))
        }
    }

    render() {
        console.log("from form");
        return <div>
                    <div style={{"font-size": "35px", "margin-top": "50px"}}>
                        Task Management Application
                    </div>
                    <div className="login-form border">
                        <div>
                            <ul className="ul">
                                <li onClick={this.openLogin} className="selection-bar"><a>Login</a></li>
                                <li onClick={this.openRegister} className="selection-bar"><a>Register</a></li>
                            </ul>
                        </div>
                        {
                            (this.props.formNavigate === "register")?
                                <div>
                                    {this.state.emptyEmailAlert}
                                    {this.state.emptyEmail}
                                    {this.state.emptyPassword}
                                    {this.state.emptyConfirmedPassword}
                                    {this.state.emptyUsername}
                                    <input onChange={this.emailReg} type="email" className="user-email border" placeholder="Email" required/>
                                    <img alt="user" className="user1" src={require("./user-logo.png")}/>
                                    <input onChange={this.passwordReg} type="password" className="user-password border" placeholder="Password" required/>
                                    <img alt="user" className="user1 key" src={require("./key-logo.png")}/>
                                    <input onChange={this.confPasswordReg} type="password" className="user-password border" placeholder="Confirm password" required/>
                                    <img alt="user" className="user1 key" src={require("./key-logo.png")}/>
                                    <input onChange={this.userReg} className="username border" placeholder="Username" style={{"margin-left": "22px"}} required></input>
                                    <button onClick={this.updateUser} className="login-btn border">Register</button>
                                    <br/>
                                    {this.state.alert}
                                </div>
                            : 
                                <div>
                                    {this.state.emptyEmailAlert}
                                    {this.state.emptyEmail}
                                    {this.state.emptyPassword}
                                    <input onChange={this.emailLogin} type="email" className="user-email border" placeholder="Email" required/>
                                    <img alt="user" className="user1" src={require("./user-logo.png")}/>
                                    <input onChange={this.passwordLogin} type="password" className="user-password border" placeholder="Password" required/>
                                    <img alt="user" className="user1 key" src={require("./key-logo.png")}/>
                                    <button onClick={this.loginUser} className="login-btn border">Login</button>
                                    <br/>
                                    {this.state.alert}
                                    <br/>
                                    <a onClick={this.openRegister} href="#">New user? register</a>
                                </div>
                        }
                    </div>
                </div>
    }
}

export default form;
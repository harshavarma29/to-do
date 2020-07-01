import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Homepage from './components/Homepage'

class App extends Component {

  constructor() {
    super();

    this.state = {
      navigator: "login",
      username: ""
    }
  }

  selection = (value) => {
    this.setState({
      navigator: value
    })
  }

  emailFunction = (emailId) => {
    this.setState({
      email: emailId
    })
  }

  usernameFunction = (name) => {
    this.setState({
      username: name
    })
  }

  render() {
      console.log(this.state.navigator)
      return (
        <div className="App">
        {
          (this.state.navigator === "login" || this.state.navigator === "register")?
            <Form user={this.usernameFunction} selection={this.selection} emailFunction={this.emailFunction} formNavigate={this.state.navigator}/>
          :
            <Homepage selection={this.selection} username={this.state.username} navigator={this.state.navigator} email={this.state.email}/>
        }
        </div>
      );
  }
}

export default App;

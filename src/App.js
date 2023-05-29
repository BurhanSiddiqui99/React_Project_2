// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: "Super"
  }

  inputChangeHandler = (event) => {
    this.setState({username : event.target.value});
  }

  render(){
  return (
    <div className="App">
       <UserInput changed = {this.inputChangeHandler}
       currentName = {this.state.username}
       />
       <UserOutput userName={this.state.username} />
       <UserOutput userName="Adain" />
       <UserOutput userName="Zain" />
    </div>
  );
}
  }

export default App;

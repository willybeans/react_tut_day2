
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    soState: 'I am ‘stateful!’'
  };
}

  render() {
    return (
      <div className="App">
        {this.state.soState}
        <MyComponent
          passedState={this.state.soState}
          user='Johnny'
         />
      </div>
    );
  }
}

const MyComponent = (props) => {
  return (
    <div>
      <h2>{props.passedState}</h2>
      our users name is {props.user}
    </div>
  );
}

export default App;

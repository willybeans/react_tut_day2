
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
        <MyComponent />
      </div>
    );
  }

}

const MyComponent = () => {
  return (
    <div>
      <h2> Im stateless! </h2>
    </div>
  );
}

export default App;

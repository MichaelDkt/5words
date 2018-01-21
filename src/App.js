import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import Words from './Words';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">5 Words</h1>
        </header>
        {this.props.userName}
        <Words/>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps)(App);

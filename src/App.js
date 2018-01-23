import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import Login from './Login';
import Player1 from './Player1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Le jeu des 5 mots</h1>
        </header>
        {this.props.userName
          ? ( <Player1 />
          )
          : (<Login/>)}

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userName: state.userName,
    p1Word5: state.p1Word5
  }
}

export default connect(mapStateToProps)(App);

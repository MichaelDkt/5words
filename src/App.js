import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import Round from './Round';
import Login from './Login';
import Player1 from './Player1';
import Player2 from './Player2';
import {Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Le jeu des 5 mots</h1>
        </header>

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/player1" component={Player1}/>
          <Route path="/player2" component={Player2}/>
        </Switch>
        
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

export default withRouter(connect(mapStateToProps)(App));

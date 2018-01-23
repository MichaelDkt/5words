import React from "react";
import { connect } from "react-redux";


function Login(props) {
  return (
    <form className="Login" onSubmit={event => {
      event.preventDefault();
      props.login(props.loginInputValue);
      props.login2(props.loginInputValue2);
    }}>
      <div>
        Joueur 1
      </div>
      <input
        type="text"
        onChange={props.updateLoginInputValue}
        value={props.loginInputValue}
      />
      <div>
        Joueur 2
      </div>
      <input
        type="text"
        onChange={props.updateLoginInputValue2}
        value={props.loginInputValue2}
      />
      <div>
        <button type="submit" className="btn btn-info" onClick={props.newWord}>C'est parti !</button>
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    loginInputValue: state.loginInputValue,
    loginInputValue2: state.loginInputValue2,
    word1: state.word1,
    word2: state.word2,
    word3: state.word3,
    word4: state.word4,
    word5: state.word5
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateLoginInputValue: (event) => dispatch({
      type: "UPDATE_LOGIN_INPUT_VALUE",
      value: event.target.value
    }),
    login: (userName) => dispatch({
      type: "LOGIN",
      userName: userName
    }),
    updateLoginInputValue2: (event) => dispatch({
      type: "UPDATE_LOGIN2_INPUT_VALUE",
      value: event.target.value
    }),
    login2: (userName2) => dispatch({
      type: "LOGIN2",
      userName2: userName2
    }),
    newWord: () => dispatch({
    type: "add"
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

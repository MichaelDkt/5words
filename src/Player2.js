import React from "react";
import { connect } from "react-redux";

function Player2(props) {
  return (
    <form className="Login" onSubmit={event => {
      event.preventDefault();
      props.p2Word1(props.p2Word1InputValue);
      props.p2Word2(props.p2Word2InputValue);
      props.p2Word3(props.p2Word3InputValue);
      props.p2Word4(props.p2Word4InputValue);
      props.p2Word5(props.p2Word5InputValue);
    }}>

    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Mots</th>
            <th scope="col">Joueur 2 : {props.userName2}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.word1}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep2Word1InputValue}
                value={props.p2Word1InputValue}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{props.word2}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep2Word2InputValue}
                value={props.p2Word2InputValue}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{props.word3}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep2Word3InputValue}
                value={props.p2Word3InputValue}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{props.word4}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep2Word4InputValue}
                value={props.p2Word4InputValue}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{props.word5}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep2Word5InputValue}
                value={props.p2Word5InputValue}
              />
            </td>
          </tr>
        </tbody>
      </table>
    <button type="submit" className="btn btn-info">Valider</button>
    </div>
  </form>
  );
}

function mapStateToProps(state) {
return {
  word1: state.word1,
  word2: state.word2,
  word3: state.word3,
  word4: state.word4,
  word5: state.word5,
  p2Word1: state.p2Word1,
  p2Word2: state.p2Word2,
  p2Word3: state.p2Word3,
  p2Word4: state.p2Word4,
  p2Word5: state.p2Word5,
  userName: state.userName,
  userName2: state.userName2,
  p2Word1InputValue: state.p2Word1InputValue,
  p2Word2InputValue: state.p2Word2InputValue,
  p2Word3InputValue: state.p2Word3InputValue,
  p2Word4InputValue: state.p2Word4InputValue,
  p2Word5InputValue: state.p2Word5InputValue
  }
}

function mapDispatchToProps(dispatch) {
return {
    newWord: () => dispatch({
      type: "add",
    }),
    updatep2Word1InputValue: (event) => dispatch({
      type: "UPDATE_p2Word1_VALUE",
      value: event.target.value
    }),
    p2Word1: (p2word1) => dispatch({
      type: "p2Word1",
      p2word1: p2word1
    }),
    updatep2Word2InputValue: (event) => dispatch({
      type: "UPDATE_p2Word2_VALUE",
      value: event.target.value
    }),
    p2Word2: (p2word2) => dispatch({
      type: "p2Word2",
      p2word2: p2word2
    }),
    updatep2Word3InputValue: (event) => dispatch({
      type: "UPDATE_p2Word3_VALUE",
      value: event.target.value
    }),
    p2Word3: (p2word3) => dispatch({
      type: "p2Word3",
      p1word3: p2word3
    }),
    updatep2Word4InputValue: (event) => dispatch({
      type: "UPDATE_p2Word4_VALUE",
      value: event.target.value
    }),
    p2Word4: (p2word4) => dispatch({
      type: "p2Word4",
      p2word4: p2word4
    }),
    updatep2Word5InputValue: (event) => dispatch({
      type: "UPDATE_p2Word5_VALUE",
      value: event.target.value
    }),
    p2Word5: (p2word5) => dispatch({
      type: "p2Word5",
      p2word5: p2word5
    }),
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(Player2);
export default ConnectedApp;

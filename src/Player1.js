import React from "react";
import { connect } from "react-redux";

function Player1(props) {
  console.log(props.p1Word1);
  console.log(props.p1Word2);
  console.log(props.p1Word3);
  console.log(props.p1Word4);
  console.log(props.p1Word5);


  return (
    <form className="Login" onSubmit={event => {
      event.preventDefault();
      props.p1Word1(props.p1Word1InputValue);
      props.p1Word2(props.p1Word2InputValue);
      props.p1Word3(props.p1Word3InputValue);
      props.p1Word4(props.p1Word4InputValue);
      props.p1Word5(props.p1Word5InputValue);
    }}>

    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Mots</th>
            <th scope="col">Joueur 1 : {props.userName}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.word1}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep1Word1InputValue}
                value={props.p1Word1InputValue}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{props.word2}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep1Word2InputValue}
                value={props.p1Word2InputValue}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{props.word3}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep1Word3InputValue}
                value={props.p1Word3InputValue}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{props.word4}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep1Word4InputValue}
                value={props.p1Word4InputValue}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{props.word5}</th>
            <td>
              <input
                type="text"
                onChange={props.updatep1Word5InputValue}
                value={props.p1Word5InputValue}
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
  p1Word1: state.p1Word1,
  p1Word2: state.p1Word2,
  p1Word3: state.p1Word3,
  p1Word4: state.p1Word4,
  p1Word5: state.p1Word5,
  userName: state.userName,
  userName2: state.userName2,
  p1Word1InputValue: state.p1Word1InputValue,
  p1Word2InputValue: state.p1Word2InputValue,
  p1Word3InputValue: state.p1Word3InputValue,
  p1Word4InputValue: state.p1Word4InputValue,
  p1Word5InputValue: state.p1Word5InputValue
  }
}

function mapDispatchToProps(dispatch) {
return {
    newWord: () => dispatch({
      type: "add",
    }),
    updatep1Word1InputValue: (event) => dispatch({
      type: "UPDATE_p1Word1_VALUE",
      value: event.target.value
    }),
    p1Word1: (p1word1) => dispatch({
      type: "p1Word1",
      p1word1: p1word1
    }),
    updatep1Word2InputValue: (event) => dispatch({
      type: "UPDATE_p1Word2_VALUE",
      value: event.target.value
    }),
    p1Word2: (p1word2) => dispatch({
      type: "p1Word2",
      p1word2: p1word2
    }),
    updatep1Word3InputValue: (event) => dispatch({
      type: "UPDATE_p1Word3_VALUE",
      value: event.target.value
    }),
    p1Word3: (p1word3) => dispatch({
      type: "p1Word3",
      p1word3: p1word3
    }),
    updatep1Word4InputValue: (event) => dispatch({
      type: "UPDATE_p1Word4_VALUE",
      value: event.target.value
    }),
    p1Word4: (p1word4) => dispatch({
      type: "p1Word4",
      p1word4: p1word4
    }),
    updatep1Word5InputValue: (event) => dispatch({
      type: "UPDATE_p1Word5_VALUE",
      value: event.target.value
    }),
    p1Word5: (p1word5) => dispatch({
      type: "p1Word5",
      p1word5: p1word5
    }),
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(Player1);
export default ConnectedApp;

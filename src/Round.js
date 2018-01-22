import React from "react";
import { connect } from "react-redux";
import Player1 from './Player1';
import Player2 from './Player2';

function Round(props) {
  return (
    <div>
        {props.p1Word5
          ? ( <Player2 />
          )
          : (<Player1/>)}
    </div>
  );
}

function mapStateToProps(state) {
return {
  p1Word5: state.p1Word5,
  userName: state.userName,
  userName2: state.userName2
  }
}

const ConnectedApp = connect(mapStateToProps)(Round);
export default ConnectedApp;

import React from "react";
import { connect } from "react-redux";

function Words(props) {
  return (
    <div>
      <div>Faire tourner la roulette des mots</div>
      <div className="h2">
        <button className="btn btn-info" onClick={this.props.newWord}> Nouveau jeu </button>
          <h2>{this.props.word1}</h2>
          <h2>{this.props.word2}</h2>
          <h2>{this.props.word3}</h2>
          <h2>{this.props.word4}</h2>
          <h2>{this.props.word5}</h2>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
return {
  word1: state.word1,
  word2: state.word2,
  word3: state.word3,
  word4: state.word4,
  word5: state.word5
  }
}

function mapDispatchToProps(dispatch) {
return {
  newWord: () => dispatch({
    type: "add"
    })
  }
}


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(Words);
export default ConnectedApp;

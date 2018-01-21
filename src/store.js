import { createStore } from 'redux'

const initialState = {
  word1: "toto",
  word2: "",
  word3: "",
  word4: "",
  word5: "",
  userName: "Michael"
}

function updateWord(state = initialState, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        word1: "Football",
        word2: "Tennis",
        word3: "Running",
        word4: "Cycle",
        word5: "Danse"
      };
    default:
      return state
  }
}

let store = createStore(updateWord);

export default store;

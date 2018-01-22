import { createStore } from 'redux'

const initialState = {
  userName: null,
  loginInputValue: "",
  userName2: null,
  loginInputValue2: "",
  word1: "",
  word2: "",
  word3: "",
  word4: "",
  word5: "",
  p1Word1: "",
  p1Word2: "",
  p1Word3: "",
  p1Word4: "",
  p1Word5: "",
  p1Word1InputValue: "",
  p1Word2InputValue: "",
  p1Word3InputValue: "",
  p1Word4InputValue: "",
  p1Word5InputValue: "",
  p2Word1: "",
  p2Word2: "",
  p2Word3: "",
  p2Word4: "",
  p2Word5: "",
  p2Word1InputValue: "",
  p2Word2InputValue: "",
  p2Word3InputValue: "",
  p2Word4InputValue: "",
  p2Word5InputValue: ""
}

function updateWord(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LOGIN_INPUT_VALUE":
      return {
        ...state,
        loginInputValue: action.value
      };
    case "LOGIN":
      return {
        ...state,
        userName: action.userName,
        loginInputValue: ""
      }
    case "UPDATE_LOGIN2_INPUT_VALUE":
      return {
        ...state,
        loginInputValue2: action.value
      };
    case "LOGIN2":
      return {
        ...state,
        userName2: action.userName2,
        loginInputValue2: ""
      }
    case "p1Word":
      return {
        ...state,
        p1Word2: action.p1Word2,
        p1Word3: action.p1Word3,
        p1Word4: action.p1Word4,
        p1Word5: action.p1Word5
        }
    case 'add':
      return {
        ...state,
        word1: "Football",
        word2: "Tennis",
        word3: "Running",
        word4: "Cycle",
        word5: "Danse"
      };
    case "UPDATE_p1Word1_VALUE":
      return {
        ...state,
        p1Word1InputValue: action.value
      };
    case "p1Word1":
      return {
        ...state,
        p1Word1: action.p1Word1,
        p1Word1InputValue: ""
      };
    case "UPDATE_p1Word2_VALUE":
      return {
        ...state,
        p1Word2InputValue: action.value
      };
    case "p1Word2":
      return {
        ...state,
        p1Word2: action.p1Word2,
        p1Word2InputValue: ""
      };
    case "UPDATE_p1Word3_VALUE":
      return {
        ...state,
        p1Word3InputValue: action.value
      };
    case "p1Word3":
      return {
        ...state,
        p1Word3: action.p1Word3,
        p1Word3InputValue: ""
      };
    case "UPDATE_p1Word4_VALUE":
      return {
        ...state,
        p1Word4InputValue: action.value
      };
    case "p1Word4":
      return {
        ...state,
        p1Word4: action.p1Word4,
        p1Word4InputValue: ""
      };
    case "UPDATE_p1Word5_VALUE":
      return {
        ...state,
        p1Word5InputValue: action.value
      };
    case "p1Word5":
      return {
        ...state,
        p1Word5: action.p1Word4,
        p1Word5InputValue: ""
      };
    case "UPDATE_p2Word1_VALUE":
      return {
        ...state,
        p2Word1InputValue: action.value
      };
    case "p2Word1":
      return {
        ...state,
        p2Word1: action.p2Word1,
        p2Word1InputValue: ""
      };
    case "UPDATE_p2Word2_VALUE":
      return {
        ...state,
        p2Word2InputValue: action.value
      };
    case "p2Word2":
      return {
        ...state,
        p2Word2: action.p2Word2,
        p2Word2InputValue: ""
      };
    case "UPDATE_p2Word3_VALUE":
      return {
        ...state,
        p2Word3InputValue: action.value
      };
    case "p2Word3":
      return {
        ...state,
        p2Word3: action.p2Word3,
        p2Word3InputValue: ""
      };
    case "UPDATE_p2Word4_VALUE":
      return {
        ...state,
        p2Word4InputValue: action.value
      };
    case "p2Word4":
      return {
        ...state,
        p2Word4: action.p2Word4,
        p2Word4InputValue: ""
      };
    case "UPDATE_p2Word5_VALUE":
      return {
        ...state,
        p2Word5InputValue: action.value
      };
    case "p2Word5":
      return {
        ...state,
        p2Word5: action.p2Word4,
        p2Word5InputValue: ""
      };

    default:
      return state
  }
}

let store = createStore(updateWord);

export default store;

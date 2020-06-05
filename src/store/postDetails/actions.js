import axios from "axios";

// thunk that has a parameter: id
export function fetchPostById(id) {
  return function thunk(dispatch, getState) {
    console.log("WHAT POST DO WE FETCH", id);
  };
}

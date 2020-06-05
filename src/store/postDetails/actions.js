import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

function fetchPostSuccess(post) {
  return { type: "fetch_post_success", payload: post };
}

// thunk that has a parameter: id
export function fetchPostById(id) {
  return async function thunk(dispatch, getState) {
    console.log("WHAT POST DO WE FETCH", id);
    const response = await axios.get(`${API_URL}/posts/${id}`);
    console.log(response.data);

    dispatch(fetchPostSuccess(response.data));
  };
}

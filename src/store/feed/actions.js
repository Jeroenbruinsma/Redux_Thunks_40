//what is an action creator? -> a function to get store/update data in our store.
import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

// returns an object where the store can work with
export function storeDataInStore(data) {
  console.log("4. inside my action creator");
  return { type: "add_posts", payload: data };
}

export function initialData(data) {
  return { type: "add_initial_posts", payload: data };
}

export function setLoadingIndicator(data) {
  return { type: "loading", payload: data };
}

export async function fetchNext5Posts(dispatch, getState) {
  //getState -> is an function to get data from the store (posts.length)
  //   console.log("2. inside the redux api call");
  const count = getState().feed.posts.length;
  //dispatch(setLoadingIndicator(true))

  const response = await axios.get(`${API_URL}/posts?offset=${count}&limit=5`);
  //   console.log("3. get  my data...", response.data.rows);

  const morePosts = response.data.rows;

  dispatch(storeDataInStore(morePosts));
}

export async function fetchInitialPosts(dispatch, getState) {
  // console.log("HOW MANY TIMES DOES THIS HAPPEN????");

  const response = await axios.get(`${API_URL}/posts?offset=${0}&limit=5`);

  const morePosts = response.data.rows;

  dispatch(initialData(morePosts));
}

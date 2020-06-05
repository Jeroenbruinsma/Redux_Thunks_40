import { combineReducers } from "redux";
import feed from "./feed/reducer";
import user from "./user/reducer";
import postDetails from "./postDetails/reducer";

const reducer = combineReducers({
  feed: feed,
  user: user,
  postDetails: postDetails,
});

export default reducer;

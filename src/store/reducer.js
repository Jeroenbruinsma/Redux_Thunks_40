import { combineReducers } from "redux";
import feed from './feed/reducer'
import user from "./user/reducer"

const reducer = combineReducers(
    {
        feed: feed,
        user: user
    }
);

export default reducer;

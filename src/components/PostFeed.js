import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {storeDataInStore, setLoadingIndicator} from "../store/feed/actions"
import { selectFeedPosts,selectLoadingIndicator } from "../store/feed/selectors";
import PostCounter from "./PostCounter";
import {fetchNext5Posts, fetchInitialPosts} from '../store/feed/actions'


export default function PostsFeed() {

  const dispatch = useDispatch()
  const posts = useSelector(selectFeedPosts)
  const loading = useSelector(selectLoadingIndicator)

  useEffect(() => {
      console.log("1. useEffect of postFeed")
    dispatch(fetchInitialPosts)
  }, [dispatch]);

  console.log("0 & 8. render the data from the redux store", posts)
  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
        <PostCounter/>
      {posts.map( (quote,i) => {
          return <p key={i}>{quote.title}</p>
      })}
        {loading ? "Loading" : <button onClick={ e => dispatch(fetchNext5Posts)}>Load more </button>}
    </div>
  ); 
}
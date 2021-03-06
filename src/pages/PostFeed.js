import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {storeDataInStore, setLoadingIndicator} from "../store/feed/actions"
import {
  selectFeedPosts,
  selectLoadingIndicator,
} from "../store/feed/selectors";
import PostCounter from "../components/PostCounter";
import { fetchNext5Posts, fetchInitialPosts } from "../store/feed/actions";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);
  // console.log("Step 6: do we have the data?", posts);
  const loading = useSelector(selectLoadingIndicator);

  useEffect(() => {
    // console.log("Step 3 useEffect of postFeed");
    dispatch(fetchInitialPosts);
  }, [dispatch]);

  // console.log("0 & 8. render the data from the redux store", posts);
  // console.log("Step 2 hello! Component working");
  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      <PostCounter />

      {posts.map((post, i) => {
        // console.log("Step 7: use in component", post);
        return (
          <p key={i}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </p>
        );
      })}

      {loading ? (
        "Loading"
      ) : (
        <button onClick={(e) => dispatch(fetchNext5Posts)}>Load more </button>
      )}
    </div>
  );
}

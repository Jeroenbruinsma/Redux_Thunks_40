export function selectFeedPosts(reduxStore) {
  // console.log("Step 6: inside the selector function", reduxStore);

  return reduxStore.feed.posts;
}
export function selectLoadingIndicator(reduxStore) {
  return reduxStore.feed.loading;
}

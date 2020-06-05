export function selectFeedPosts(reduxStore) {
  // console.log("7. inside the selector function");

  return reduxStore.feed.posts;
}
export function selectLoadingIndicator(reduxStore) {
  return reduxStore.feed.loading;
}

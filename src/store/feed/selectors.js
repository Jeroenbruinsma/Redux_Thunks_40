export function selectFeedPosts (reduxStore){
    return reduxStore.feed.posts
}
export function selectLoadingIndicator (reduxStore){
    return reduxStore.feed.loading
}
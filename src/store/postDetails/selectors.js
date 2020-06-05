//
export function selectPost(reduxState) {
  console.log("WHAT IS OUT STATE", reduxState);
  return reduxState.postDetails;
}

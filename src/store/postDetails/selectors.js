//
export function selectPost(reduxState) {
  console.log("WHAT IS OUT STATE", reduxState.postDetails);
  return reduxState.postDetails;
}

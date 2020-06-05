const initialState = {};

export default function postDetailsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "fetch_post_success":
      return payload;
    default:
      return state;
  }
}

const initialState = {
  username: "Jeroen",
  profileImg: "link to img",
  jwt: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGNUP_SUCCESS":
      console.log("PAYLOAD?", payload);
      return { ...state, jwt: payload };
    default:
      return state;
  }
};

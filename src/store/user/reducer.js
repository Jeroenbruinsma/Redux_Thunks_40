const initialState = {
  jwt: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGNUP_SUCCESS":
      return { ...state, jwt: payload };
    case "PROFILE_FETCHED":
      console.log("PAYLOAD?", payload);
      return { ...state, ...payload };
    default:
      return state;
  }
};

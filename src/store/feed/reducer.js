const initialState = {
  loading: false,
  posts: [],
};

export default (state = initialState, { type, payload }) => {
  //   console.log("5. inside the reducer", type);
  switch (type) {
    case "add_posts":
      //   console.log("6. reducer in add_posts", type);
      return { ...state, posts: [...state.posts, ...payload], loading: false };

    case "add_initial_posts":
      return { ...state, posts: payload };

    case "loading":
      return { ...state, loading: payload };
    default:
      return state;
  }
};

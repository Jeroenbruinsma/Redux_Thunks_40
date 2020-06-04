const initialState = {
    loading: false,
    posts: []

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
     case "add_posts":
        console.log("what is my payload", payload)
        return { ...state, posts: [...state.posts , ...payload], loading: false }
     case "loading":
         return {...state, loading: payload}
    default:
        return state
    }
}

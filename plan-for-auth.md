## Sign up form

1. Form component / Page X

- Route
- Component
- Form

2. Event listeners & handlers to get the data from the form X

- useState
- onChange

3. Post to the api X

- axios.post
- add email, name, password in the body of the request

4. Response X

- token / jwt should be in the body

5. Store it for later use (ideally in redux) X

- create an action
- dispatch an action
- handle action in reducer
- use your state somewhere (next feature)

## Login form

## Do something we have to be authenticated & authorized for

1. After we get the token in the signup form, use it to make an authenticated & authorized request to get our own profile

   - axios.get
   - set an Authorization Header in our request

2. Get a response

3. Store the response in redux as well

BONUS:

## If you store your token in redux you can easily get it in any thunk

```javascript
export async function fetchNext5Posts(dispatch, getState) {
  const count = getState().feed.posts.length;
  const token = getState().user.jwt;
  //dispatch(setLoadingIndicator(true))

  const response = await axios.get(`${API_URL}/posts?offset=${count}&limit=5`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //   console.log("3. get  my data...", response.data.rows);

  const morePosts = response.data.rows;

  dispatch(storeDataInStore(morePosts));
}
```

# Feature: Page with list of posts

Plan:

Steps:

- Api call
- action
- reducer
- selector

Steps in order

0. CRA
   - Test
1. Redux setup
   - reducer
   - create a store
   - Provider
   - TEST: -> Devtools: store exists? initial state
2. Create a component (the Posts page)
   - Route (when using React Router)
   - TEST: -> display some text
3. Make request to the api
   - useEffect
   - write `action creator` a function that creates an action
   - useDispatch, dispatch = useDispatch()
   - dispatch action (thunk) -> makes a request to the api
   - TEST: (data from api)
4. Handle the response from the api
   - write `action creator` a function that creates an action
   - "send the data to the store", dispatch an action -> to store
   - TEST: (check devtools, look for action)
5. Handle the action in the reducer -> new state
   - Write a new case
   - return a new (updated) state
   - TEST: (check devtools, look at the `diff`, has something changed)
6. Use the data from the store in our component
   - write a selector
   - useSelector()
   - assign it to a variable
   - TEST: check to see if you have the data in your component
7. Display the data -> using JSX -> map, { user.name }
   - TEST: can you see the content on the screen

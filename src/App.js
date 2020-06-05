import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import PostFeed from "./pages/PostFeed";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/posts/:id" component={PostDetails} />
        <Route exact path="/posts" component={PostFeed} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

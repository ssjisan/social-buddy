import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';
import Profile from './Components/Profile/Profile';
import Comments from './Components/Comments/Comments';
import AllProfiles from './Components/AllProfiles/AllProfiles';
import UserPost from './Components/UserPost/UserPost';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
        <Route path="/post/:id">
            <Comments></Comments>
        </Route>
          <Route exact path="/">
              <AllProfiles> </AllProfiles>
          </Route>

          <Route path="/profile/:id">
            <Post></Post>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

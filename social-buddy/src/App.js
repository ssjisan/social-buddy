import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';
import Comments from './Components/Comments/Comments';
import AllProfiles from './Components/AllProfiles/AllProfiles';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
        <Route path="/post/:postId">
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

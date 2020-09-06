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


function App() {
  /*****************Profile API**************************/ 
  const [profile, setProfile] = useState([]);
    useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data=>setProfile(data))
},[])

  /*******************Post API***********************/ 
  const [post, setPost] = useState([])
  useEffect(()=> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res=> res.json())
    .then(data=> setPost(data))
  }, [])
    /*******************Comments API***********************/ 

  const [comments, setComments] = useState([])
  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data=>setComments(data))
  },[])
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
        <Route path="/comments">
            {
              comments.map(comments =><Comments comments={comments}></Comments>)
            }
        </Route>
        <Route path="/:id">
           {
             post.map(post =>  <Post post={post}> </Post>)
           }
          </Route>
          <Route>
          {
              profile.map(profile => <Profile profile={profile}></Profile>)
          }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css'
import UserPost from '../UserPost/UserPost';

const Post = (props) => {
const {id} = useParams(); 
const [post, setPost] = useState([]);
useEffect(()=> {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  fetch(url)
  .then(res=> res.json())
  .then(data=> {
    const xyz = data.filter(dt => dt.userId == id) 
    setPost(xyz);
    console.log(xyz);
  })
}, [])
    return (
        <div>
                {
                    post.map(post => <UserPost post={post} key={post.id}></UserPost>)
                }
        </div>
    );
};

export default Post;
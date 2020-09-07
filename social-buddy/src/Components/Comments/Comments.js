import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.css'
import PostComments from '../PostComments/PostComments';


const Comments = (props) => {
const {id} = useParams;
const [comments, setComments] = useState([])
  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data=> {
        const exactComments = data.filter(post => data.postId == id) 
        setComments(exactComments);
        console.log(exactComments);
    })
  },[])
    return (
        <div>
            {
              comments.map(comments => <PostComments comments={comments} key={comments.id} > </PostComments>)
            }
        </div>
    );
};

export default Comments;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.css'
import PostComments from '../PostComments/PostComments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import './Comments.css';


const useStyles = makeStyles();

const Comments = () => {
  const { postId } = useParams();
  const classes = useStyles();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  const [comments, setComments] = useState([])
  useEffect( () => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  
    return (
      <div >
        <div id="final-post">
        <h4 style={{textAlign: 'center'}} >{post.body}</h4>
        <div id="button">
          <ThumbUpAltIcon /> <ThumbDownIcon />  
        </div> 
        </div>
        <br/>
        <div>
        {
          
          comments.map(comment => <PostComments comment={comment} key={comment.id}></PostComments>)
       
        }
        </div>
      </div>
    );
};

export default Comments;
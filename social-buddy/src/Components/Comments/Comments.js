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
      <div id="final-post">
        <div id="card-post">
          <Card className={classes.root} id="post">
                  <CardActionArea>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p"> <strong>{post.name}</strong> <br/> </Typography>
                          <Typography variant="body2" color="textSecondary" component="p"> {post.body}</Typography>
                      </CardContent>
                  </CardActionArea>
            </Card>
        </div>
        <div>
        {
          
          comments.map(comment => <PostComments comment={comment} key={comment.id}></PostComments>)
       
        }
        </div>
      </div>
    );
};

export default Comments;
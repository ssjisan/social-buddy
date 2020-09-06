import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css'

const useStyles = makeStyles();


const Post = (props) => {
const classes = useStyles();
const {title} = props.post
    return (
        <div id="post">
            <Card className={classes.root} id="post-card">
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">  </Typography>
    <Typography variant="body2" color="textSecondary" component="p"> <strong>Title</strong> <br/> {title}</Typography>
            </CardContent>
        </CardActionArea>
            <CardActions>
                <Link to="/comments"> <Button variant="contained" color="primary"> Timeline </Button> </Link>   
            </CardActions>
    </Card>
        </div>
    );
};

export default Post;
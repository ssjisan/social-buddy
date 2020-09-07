import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';
import './PostComments.css';

const useStyles = makeStyles();

const PostComments = (props) => {
const classes = useStyles();
const [image, setImage] = useState([]);
    useEffect( () => {
        fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => setImage(data.results[0].picture))
    }, []) 

const {  name, body } = props.comment;

    return (
        <div id="comments" style={{margin:"0 auto"}}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Avatar style={{marginRight: '10px'}} alt="Remy Sharp" src={image.medium} />
                        <Typography variant="body2" color="textSecondary" component="p" style={{color:"blue"}}> <strong>{name}</strong> <br/> </Typography>
                        <Typography variant="body2" color="textSecondary" component="p"> <strong>{body}</strong> <br/> </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> <ThumbUpAltIcon /> </Button>
                    <Button size="small" color="primary"> <ThumbDownIcon /> </Button>
                    <Button size="small" color="primary"> <ShareIcon /> </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default PostComments;
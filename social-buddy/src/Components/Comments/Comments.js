import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Comments.css'

const useStyles = makeStyles();

const Comments = (props) => {
const classes = useStyles();
const {name,body} = props.comments;

    return (
        <div id="commnets">
            <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">  </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> <strong>{name}</strong></Typography>
            <Typography variant="body2" color="textSecondary" component="p"> {body}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        </div>
    );
};

export default Comments;
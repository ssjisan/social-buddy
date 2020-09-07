import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PostComments.css';

const useStyles = makeStyles();

const PostComments = (props) => {
const classes = useStyles();


const { email, name, body } = props.comment;

    return (
        <div id="comments">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p"> <strong>{body}</strong> <br/> </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button variant="contained" color="primary"> Details </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default PostComments;
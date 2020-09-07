import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './UserPost.css'
const useStyles = makeStyles();



const UserPost = (props) => {
const {title,id} =props.post;
const classes = useStyles();

    return (
        <div id="post">
            <Card className={classes.root} id="post-card">
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">  </Typography>
                        <Typography variant="body2" color="textSecondary" component="p"> <strong>Title</strong> <br/> {title} </Typography>
                        {id}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Link to={"/post/"+id}> <Button variant="contained" color="primary"> Details </Button> </Link>
                </CardActions>
            </Card>
            
        </div>
    );
};

export default UserPost;
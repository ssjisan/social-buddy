import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles();

const PostComments = () => {
const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} id="post-card">
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p"> <strong>Title</strong> <br/> </Typography>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Profile.css'

const useStyles = makeStyles();


const Profile = (props) => {
const classes = useStyles();
const {name,email,username,id} = props.profile;
console.log(props.profile.id);
    return (
        <div id="profile"> 
    <Card className={classes.root} id="profile-card">
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2"> {name} </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> <strong>E-mail:</strong> {email} </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> <strong>User name: </strong> {username} </Typography>
            </CardContent>
        </CardActionArea>
            <CardActions>
                <Link to={"/profile"+id}> <Button variant="contained" color="primary"> Timeline </Button> </Link>   
            </CardActions>
    </Card>
        </div>
    );
};

export default Profile;
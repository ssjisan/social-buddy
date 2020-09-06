import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
const useStyles = makeStyles();

const Header = () => {
const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> <EmojiPeopleTwoToneIcon />
            </IconButton>
            <Typography variant="h6" color="inherit"> Social Buddy </Typography>
            </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
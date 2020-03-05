import React from 'react';

import { Box, AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import Image from 'material-ui-image';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon  from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import totoroImg from '../images/tortoro.png';


const useStyles = makeStyles(theme => ({
    root: {
      height: 250,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      padding: 20,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      height: '40%',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    appbar: {
      height: 150,
      position: 'relative',
      overflow: 'hidden'
    },
    totoro: {
      width: '307px',
      position: 'absolute',
      right: '23%',
      top: -45,
      zIndex: 0
    }
  }));

const TopBar = () => {

    const classes = useStyles();

    return(
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h3" noWrap>
            Studio Ghibli Movies
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
        <img className={classes.totoro} src={totoroImg} />
      </AppBar>
    </div>
    );
}

export default TopBar;
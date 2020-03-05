import React, { useEffect } from 'react';

import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    card: {
      width: 445,
      marginRight: 100,
      marginBottom: 50,
      cursor: 'pointer'
    },
    media: {
      height: 0,
      paddingTop: 700,
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


const Movie = ({ movie, image }) => {

    const classes = useStyles();

    return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title={movie.title}
      />
      <CardHeader
        action={
            <>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          </>
        }
        title={movie.title}
        subheader={`Released: ${movie.release_date}`}
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent> */}
    </Card>
    )
}

export default Movie;
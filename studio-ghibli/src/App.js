import React from 'react';
import TopBar from './components/TopBar.js';
import MovieList from './components/MovieList.js';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  mainApp: {
    backgroundColor: '',
  }
  
})

function App() {

  const classes = useStyles();

  return (
    <div className={classes.mainApp}>
      <TopBar />
      <MovieList />
    </div>
  );
}

export default App;

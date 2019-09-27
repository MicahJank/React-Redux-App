import React, { useEffect } from 'react';

import Movie from './Movie.js';
import { fetchMovies } from '../actions';

import { connect } from 'react-redux';

import { Box } from '@material-ui/core';


const MovieList = ({ movieList, fetchMovies }) => {

    useEffect(() => {
        fetchMovies();
    }, []);

    // console.log(movieList);
    return (
        <Box display='flex' justifyContent='center' flexWrap='wrap'>
            {movieList.map(movie => {
                return <Movie key={movie.id} movie={movie} />
            })}
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        movieList: state.movieListReducer.movies,
        error: state.movieListReducer.error,
        pending: state.movieListReducer.isPending
    }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
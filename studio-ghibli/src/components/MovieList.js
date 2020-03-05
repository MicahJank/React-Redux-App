import React, { useEffect } from 'react';

import Movie from './Movie.js';
import { images } from '../images/images.js';
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
            {movieList.map((movie, i) => {
                return <Movie key={movie.id} image={images[i]} movie={movie} />
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
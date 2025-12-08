import React, { useEffect } from 'react'
import Movie from './Movie'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../redux/slices/movieSlice';

function MovieList() {

    const { movies } = useSelector((store) => store.movies);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch])


    return (
        <div className='movieList-main'>
            {
                movies && movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))
            }

        </div>
    )
}

export default MovieList
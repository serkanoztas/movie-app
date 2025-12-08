import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieById } from '../redux/slices/movieSlice';
import { useNavigate } from 'react-router-dom';

function Movie({ movie }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { poster_path, title, overview, release_date, backdrop_path, vote_average, id } = movie;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    //console.log(id);

    const getMovieDetails = () => {
        dispatch(getMovieById(id));
        navigate('/details/:id');
    }

    return (
        <div className='movie-main'>
            <div className='movie-image-wrapper'>
                <img src={imageUrl} />
                <button> Watch </button>
            </div>
            <h3> {title} </h3>
            <p> Release Date: {release_date} </p>
            <button className='details-button' onClick={getMovieDetails}> details </button>
        </div>
    )
}

export default Movie
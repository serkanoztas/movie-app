import React from 'react'
import { useSelector } from 'react-redux';

function MovieDetails({ setBackgroundImage }) {

    const { selectedMovie } = useSelector((store) => store.movies);
    const { poster_path, title, overview, release_date, backdrop_path, vote_average, id } = selectedMovie;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    
    setBackgroundImage(backdrop_path);

    return (
        <div className='movieDetails-main'>
            <img src={imageUrl} />
            <div className='movieDetails-details'>
                <h1> {title} </h1>
                <h3> {release_date} </h3>
                <h4> overview </h4>
                <p> {overview} </p>
            </div>
        </div>
    )
}

export default MovieDetails
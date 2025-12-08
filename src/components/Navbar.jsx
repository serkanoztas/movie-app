import React, { useState } from 'react'
import { FaFireAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineCelebration } from "react-icons/md";
import MaterialUISwitch from '@mui/material/Switch';
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMovieByType } from '../redux/slices/movieSlice';

function Navbar({darkMode, toggleDarkMode}) {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/')
    }

    const chanceMovieType = (movieType) => {
        const popular = document.querySelector("#popular");
        const TopRated = document.querySelector("#TopRated");
        const Upcoming = document.querySelector("#Upcoming");
        const homeNavbarTypeName = document.querySelector("#movieType");
        dispatch(getMovieByType(movieType));
        if (movieType == "popular") {
            popular.style.color = "#278ffeff";
            TopRated.style.color = "#ff0000ff";
            Upcoming.style.color = "#ff0000ff";
            homeNavbarTypeName.innerHTML = "Popular";
        }
        else if (movieType == "top_rated") {
            TopRated.style.color = "#278ffeff";
            popular.style.color = "#ff0000ff";
            Upcoming.style.color = "#ff0000ff";
            homeNavbarTypeName.innerHTML = "TopRated";
        }
        else if (movieType == "upcoming") {
            Upcoming.style.color = "#278ffeff";
            TopRated.style.color = "#ff0000ff";
            popular.style.color = "#ff0000ff";
            homeNavbarTypeName.innerHTML = "UpComing";
        }
    }

    return (
        <div className='narvbar-main'>
            <div>
                <h2 onClick={navigateToHome} >MovieApp</h2>
            </div>
            <div className='navbar-options'>
                <h4 className='darmode-wrapper'>
                    <div className='darkmode'>
                        <MaterialUISwitch sx={{ m: 2 }} checked={darkMode} onClick={toggleDarkMode} />
                        {
                            darkMode ? <IoMoonOutline className='navbar-moon' /> : <IoSunnyOutline className='navbar-moon' />
                        }
                    </div>
                </h4>
                <h4 id='popular' className='navbar-buttons' onClick={() => chanceMovieType("popular")} > Popular <FaFireAlt className='navbar-icons' /> </h4>
                <h4 id='TopRated' className='navbar-buttons' onClick={() => chanceMovieType("top_rated")}> Top Rated <CiStar className='navbar-icons' /> </h4>
                <h4 id='Upcoming' className='navbar-buttons' onClick={() => chanceMovieType("upcoming")}> Upcoming <MdOutlineCelebration className='navbar-icons' /> </h4>
            </div>
        </div>
    )
}

export default Navbar
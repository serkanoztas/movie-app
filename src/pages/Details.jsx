import React, { useState } from 'react'
import MovieDetails from '../components/MovieDetails'

function Details() {

    const [backgroundImage, setBackgroundImage] = useState("");
    const imageUrl = `https://image.tmdb.org/t/p/original${backgroundImage}`;

    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    backgroundImage: backgroundImage ? `url(${imageUrl})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    transition: "background-image 0.5s ease-in-out",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            >
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    minHeight: "100vh",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1
                }}>
            </div>
            <div style={{ position: "relative", zIndex: 2 }}>
                <MovieDetails setBackgroundImage={setBackgroundImage} />
            </div>
        </div>
    )
}

export default Details
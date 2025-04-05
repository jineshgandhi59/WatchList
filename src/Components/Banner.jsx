import React, { useEffect, useState } from 'react';
import "./Banner.css";

function Banner() {

    // Random banner generator

    const [movieBanner, setMovieBanner] = useState("");
    const [movieTitle,setMovieTitle] = useState("");

    async function getRandomMovieBanner() {

        const authToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2UxNjY4ZjRjYzBhOTRkZWFmMGQ3Y2NiMDBjMzg5MSIsIm5iZiI6MTc0MjM4MjI5NC43ODMsInN1YiI6IjY3ZGFhNGQ2YzUzNmFmNjViYmE2Y2I0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gVAa-n2OKKWT37tQDerE7EfrjF4ZTnsxHu0oYbuL_8I";
        const randomPage = Math.floor(Math.random() * 500) + 1;  
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${randomPage}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${authToken}`,
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            if (data.results.length > 0) {
                const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
                const bannerUrl = `https://image.tmdb.org/t/p/w500${randomMovie.backdrop_path || randomMovie.poster_path}`;
                setMovieTitle(randomMovie.title)
                setMovieBanner(bannerUrl);
            }
        } catch (error) {
            console.error("Error fetching movie banner:", error);
        }
    }

    useEffect(() => {
        getRandomMovieBanner();
    }, []);

    return (
        // <div className="banner" style={{ backgroundImage: `url(${movieBanner})` }}>
        //     {`Title : ${movieTitle}`}
        // </div>
        <div className="banner"></div>
    );
}

export default Banner;

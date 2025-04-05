import React, { useEffect, useState } from "react";
import "./Movies.css";
import Card from "./Card";
import Pagination from "./Pagination";

function Movies({addToWatchlist}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      })
      .catch((err) => console.error(err));
  }, [page]);

  function nextPage() {
    setPage(page+1);
  }

  function prevPage(){
    if(page>1) setPage(page-1)
  }

  return (
    <>
      <div className="heading">
        <h2>Trending Movies</h2>
      </div>
      
      <div className="cardCont">
        {movies.map((movie,idx) => (
          <Card key={idx} movie={movie} addToWatchlist={addToWatchlist} />
        ))}
      </div>
      
      <Pagination page={page} nextPage={nextPage} prevPage={prevPage}/>
      
    </>
  );
}

export default Movies;

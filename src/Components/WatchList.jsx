import React from "react";
import "./WatchList.css";

function WatchList({ watchlist, removeFromWatchList }) {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="name-heading">Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genre</th>
            <th>Delete Movies</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((movie) => (
            <tr key={movie.id}>
              <td className="name-column">
                <div className="name-poster-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}  `}
                  />
                  <span className="movie-title">
                    {movie.title}
                  </span>
                </div>
              </td>
              <td>{movie.vote_average}</td>
              <td>{movie.popularity}</td>
              <td>{movie.genre_ids.map((genre_id)=>(
                genre_id + " "
              ))}</td>
              <td
                onClick={() => {
                  removeFromWatchList(movie);
                }}
                className="delete-btn"
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default WatchList;

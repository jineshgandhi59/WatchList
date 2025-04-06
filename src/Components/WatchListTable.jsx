import React from 'react'
import "./WatchListTable.css"
import {genreids} from "../utilities/genre.js"

function WatchListTable({watchlist,removeFromWatchList,search}) {

  return (
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
          {watchlist.filter((movie)=>{
            return movie.title.toLowerCase().includes(search.toLowerCase())
          }).map((movie) => (
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
              <td>{genreids[movie.genre_ids[0]]}</td>
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
  )
}

export default WatchListTable
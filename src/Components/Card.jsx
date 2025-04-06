import React, { useState } from 'react'
import "./Card.css"

function Card({movie,watchlist,addToWatchlist,removeFromWatchList}) {

  function watchlistContains(movie) {
    for(let i=0;i<watchlist.length;i++) {
      if(watchlist[i].id===movie.id) return true;
    }
    return false;
  }
  

  return (
    
    <>
      <div style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
        }} className="card">
        {
          watchlistContains(movie) ? (
            <button onClick={()=>
              removeFromWatchList(movie)
            } className="remove">
              ❌
            </button>
          ) : (
            <button onClick={()=>{
              addToWatchlist(movie)
            }} className="add">
              ➕
            </button>
          )
        }
        <div className='nameCont'>
          <p>{movie.title}</p>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Card
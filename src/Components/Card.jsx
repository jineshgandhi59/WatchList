import React, { useState } from 'react'
import "./Card.css"

function Card({movie,addToWatchlist}) {

  const [containsInWatchlist,setcontainsInWatchlist] = useState(false)

  return (
    <>
      <div style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
        }} className="card">
        {
          containsInWatchlist ? (
            <button className="remove">
              ❌
            </button>
          ) : (
            <button onClick={()=>{
              addToWatchlist(movie)
              setcontainsInWatchlist(true)
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
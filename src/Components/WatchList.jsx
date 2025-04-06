import React, { useEffect } from "react";
import "./WatchList.css";
import WatchListTable from "./WatchListTable";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { genreids } from "../utilities/genre";

function WatchList({ watchlist, removeFromWatchList }) {

  const [search,setSearch] = useState("");
  const [genreList,setGenreList] = useState([]);
  const [currGenre,setCurrGenre] = useState("All Genres")

  useEffect(()=>{
    let genreSet = new Set();
    genreSet.add("All Genres");
    watchlist.map((movie)=>{
      genreSet.add(genreids[movie.genre_ids[0]]);
    })
    setGenreList([...genreSet]);
  },[watchlist])

  return (
    <>
      {
        watchlist.length !==0 ? (
          <>
            <div className="search">
              <input placeholder="Search WatchList" onChange={(e)=>{
                setSearch(e.target.value);
              }} value={search} type="text"/>
            </div>
            

            <div className="genreList"> 
            {
              genreList.map((genre, index) => (
                <span className={genre==currGenre ? "genre blue" : "genre gray"} onClick={()=>{setCurrGenre(genre);console.log(genre)}} key={index}>{genre}</span>
              ))
            }
            </div>

            <WatchListTable currGenre={currGenre} search={search} watchlist={watchlist} removeFromWatchList={removeFromWatchList}></WatchListTable>
          </>
        ) : (
          <div className="no-movies-container">
            <h2>Your Watchlist is Empty 🎬</h2>
            <p>Looks like you haven't added any movies yet.</p>
            <Link to="/">
              <button className="go-movies-btn">Go to Movies Page</button>
            </Link>
          </div>
        )
      }
      
    </>
  );
}

export default WatchList;

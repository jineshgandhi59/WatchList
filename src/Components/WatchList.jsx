import React from "react";
import "./WatchList.css";
import WatchListTable from "./WatchListTable";
import {Link} from 'react-router-dom'
import { useState } from "react";

function WatchList({ watchlist, removeFromWatchList }) {

  const [search,setSearch] = useState("");

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
            <WatchListTable search={search} watchlist={watchlist} removeFromWatchList={removeFromWatchList}></WatchListTable>
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

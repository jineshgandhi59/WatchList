import './App.css'
import Movies from './Components/Movies';
import NavBar from './Components/NavBar'
import WatchList from './Components/WatchList'
import Recommended from './Components/Recommended'
import Banner from './Components/Banner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react';
import { WatchlistContext } from './Components/WatchlistContext';


function App() {


    const [watchlist,setWatchlist] = useState([]);



    const watchlistFunctions = {
        watchlist: watchlist,
        addToWatchlist: addToWatchlist,
        removeFromWatchList: removeFromWatchList
    }

    function addToWatchlist(movie) {
        let updatedList = [...watchlist,movie];
        setWatchlist(updatedList);
        localStorage.setItem("movies",JSON.stringify(updatedList))
    }
    
    function removeFromWatchList(movie) {
        let idx = 0;
        for(let i=0;i<watchlist.length;i++) {
            if(movie.id===watchlist[i].id) {
                idx = i;
            }
            
        }
        const updatedList = [...watchlist];
        updatedList.splice(idx,1);
        setWatchlist(updatedList);
        localStorage.setItem("movies",JSON.stringify(updatedList))
    }

    useEffect(()=>{
        let movies = localStorage.getItem("movies");
        if(movies) {
            setWatchlist(JSON.parse(movies))
        }
    },[])
    

    return(
        <WatchlistContext.Provider value={watchlistFunctions}>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                        <Route path='/' element={
                            <>
                                <Banner/>
                                <Movies/>
                            </>
                        }> </Route>
                        <Route path='/watchlist' element={<WatchList/>}></Route>
                        <Route path='/recommended' element={<Recommended/>}></Route>
                </Routes>
            </BrowserRouter>
        </WatchlistContext.Provider>
    )
}

export default App

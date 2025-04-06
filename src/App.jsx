import './App.css'
import Movies from './Components/Movies';
import NavBar from './Components/NavBar'
import WatchList from './Components/WatchList'
import Recommended from './Components/Recommended'
import Banner from './Components/Banner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react';

function App() {

    const [watchlist,setWatchlist] = useState([]);

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
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={
                    <>
                        <Banner/>
                        <Movies removeFromWatchList={removeFromWatchList} addToWatchlist={addToWatchlist} watchlist={watchlist}/>
                    </>
                }> </Route>
                <Route path='/watchlist' element={<WatchList watchlist={watchlist} removeFromWatchList={removeFromWatchList} setWatchlist={setWatchlist}/>}></Route>
                <Route path='/recommended' element={<Recommended/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

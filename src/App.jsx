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
        setWatchlist([...watchlist,movie]);
    }


    useEffect(() => {
        console.log(watchlist);
    }, [watchlist]);
    

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={
                    <>
                        <Banner/>
                        <Movies addToWatchlist={addToWatchlist}/>
                    </>
                }> </Route>
                <Route path='/watchlist' element={<WatchList/>}></Route>
                <Route path='/recommended' element={<Recommended/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

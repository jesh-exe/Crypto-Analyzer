import React, { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovie(data);
            setIsLoading(false);
            }
        catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        let timerout=setTimeout(()=>{
            getMovies(`${API_URL}`);
        },100)
        return()=>{clearTimeout(timerout)};
    }, [page]);
    useEffect(() => {
        let timerout=setTimeout(()=>{
            getMovies(`${API_URL}`);
        },100)
        return()=>{clearTimeout(timerout)};
    }, [page]);
    
    return (<AppContext.Provider value={{ isLoading, movie, isError, query, setQuery ,page,setPage}}>{children}</AppContext.Provider>);
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };
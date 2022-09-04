import React, { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("demon-slayer");
    const [page, setPage] = useState(1);
    let API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=11&page=${page}&sparkline=false&price_change_percentage=24h`;
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovie(data);
            if (data === "True") {
                setIsLoading(false);
                setIsError({show:"false",msg:data.Error});
            } else {
                setIsError({
                    show: "true",
                    msg: data.Error,
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        let timerout=setTimeout(()=>{
            getMovies(`${API_URL}`);
        },500)
        return()=>{clearTimeout(timerout)};
    }, [page]);
    
    return (<AppContext.Provider value={{ isLoading, movie, isError, query, setQuery ,page,setPage}}>{children}</AppContext.Provider>);
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };
import React, { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const getCoins = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setCoins(data);
            setIsLoading(false);
            }
        catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        let timerout=setTimeout(()=>{
            getCoins(`${API_URL}`);
        },100)
        return()=>{clearTimeout(timerout)};
    }, [page]);
    
    return (<AppContext.Provider value={{ isLoading, coins, query, setQuery ,page,setPage}}>{children}</AppContext.Provider>);
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };
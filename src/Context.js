import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import Alert from './components/Alert';
import { auth, db } from "./firebase";
import { onSnapshot, doc } from "firebase/firestore";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [user, setUser] = useState(null);
    const [watchlist, setWatchlist] = useState([]);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
      });

    const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    
    useEffect(() => {
        if (user) {
          const coinRef = doc(db, "watchlist", user?.uid);
          var unsubscribe = onSnapshot(coinRef, (coin) => {
            if (coin.exists()) {
              console.log(coin.data().coins);
              setWatchlist(coin.data().coins);
            } else {
              console.log("No Items in Watchlist");
            }
          });
    
          return () => {
            unsubscribe();
          };
        }
      }, [user]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) setUser(user);
          else setUser(null);
        });
      }, []);
    
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
    useEffect(() => {
        
        return()=>{<Alert/>};
    }, [alert]);
    
    return (<AppContext.Provider value={{ isLoading, coins, query, setQuery ,page,setPage ,alert,setAlert,user,watchlist}}>{children}</AppContext.Provider>);
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };
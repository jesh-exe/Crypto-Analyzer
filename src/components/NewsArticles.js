import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import { useEffect, useState } from "react";

const NewsArticles = ({ title, subtitle, icon, progress, increase }) => {
    const [news, setNews] = useState([]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const fetch = require('node-fetch');

    const getnews=async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setNews(data.results);
            console.log(data.results);
            }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
            getnews('https://newsdata.io/api/1/news?apikey=pub_20177fc0d839822c8c656c4402363865527f3&q=crypto%20news');
        
    },[]);
    
  return (
    <div className="row justify-content-center ">

            {news.map((curMovie)=>{
                const {title,content,pubDate}=curMovie;
                return<div className="card col-md-10 m-3 p-4 bg-transparent rounded-5">
                    <div className="movie p-4 bg-dark  rounded-5" >
                    <div className="card-info">
                    
                        <p className="title" style={{ color: "gold" }}>{title}</p>
                    </div> 
                    <div className="movie-info" >
                    <p className="type">{content.length>1000?`${content.slice(0,1000)}...`:content}</p>
                    <br/>
                    <p>{pubDate}</p>
                    </div>
                    </div>
                </div>;
            })} 
        </div>
  );
};

export default NewsArticles;

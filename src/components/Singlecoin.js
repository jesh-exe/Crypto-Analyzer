import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
// import { API_URL } from '../Context';
const SingleMovie = () => {

    const { id } = useParams();
    console.log(id);
    const [coin, setCoin] = useState("bitcoin");
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            console.log(res);
            
            const data = await res.json();
            setCoin(data);
            
        } catch (error) {
            
            console.log(error);
        }
    };
    
    useEffect(() => {
        let timerout = setTimeout(() => {
            getMovies(`https://api.coingecko.com/api/v3/coins/${id}`);
        }, 500)
        return () => { clearTimeout(timerout) };
    }, [id]);
  
    return (
        <>
            <div class="container-fluid mt-5">
                <div class="row mt-4 text-white">
                    <div class="col-md-4 first-div text-center">
                        <img src={coin.image.large} alt="" />

                        <h1>{coin.name}</h1>
                        <p>{coin.description.en}</p>
                        <h3>Rank:{coin.coingecko_rank}</h3>
                        <h3>Current Price:₹ {coin.market_data.current_price.inr}</h3>

                    </div>
                    <div class="col-md-8 second-div"  >
       {/* <iframe width="907" height="510" src= title="SHOCKING Truth About The Indo-Pak War Nobody Talks About ft. Abhijit Chavda | TRS Clips 983" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>             */}
                        <div class="row mt-4  justify-content-between"> 
                            <div class="col-md">

                                <button type="button mr-2" class="btn btn-outline-warning w-100">24 Hours</button>
                            </div>
                            <div class="col-md">

                                <button type="button mr-2" class="btn btn-outline-warning w-100">30 Days</button>
                            </div>
                            <div class="col-md">

                                <button type="button" class="btn btn-outline-warning w-100">3 Months</button>
                            </div>
                            <div class="col-md">

                                <button type="button" class="btn btn-outline-warning w-100">1 Year</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </>
    );
};
export default SingleMovie;
import React, { useState, useEffect } from "react";
// import Navbar from './Navbar';
import { useParams } from "react-router-dom";

// import { API_URL } from '../Context';
const SingleMovie = () => {
  const [coin, setCoin] = useState("bitcoin");
  const { id } = useParams();

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setCoin(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`https://api.coingecko.com/api/v3/coins/${id}`);
  }, [id]);

  return (
    <>
      <div class="container-fluid mt-5 ">
        <div class="row mt-4 text-white">
          <div class="col-md-4 first-div text-center">
            <img src={coin?.image?.large} alt="" />

            <h1>{coin?.name}</h1>
            <p>{coin?.description?.en.split(". ")[0]}.</p>
            <h3>Rank:{coin?.coingecko_rank}</h3>
            <h3>Current Price:₹ {coin?.market_data?.current_price?.inr}</h3>
          </div>
          <div class="col-md-8 second-div">
            <div class="row mt-4  justify-content-between">
              <div class="col-md">
                <button
                  type="button mr-2"
                  class="btn btn-outline-warning w-100"
                >
                  24 Hours
                </button>
              </div>
              <div class="col-md">
                <button
                  type="button mr-2"
                  class="btn btn-outline-warning w-100"
                >
                  30 Days
                </button>
              </div>
              <div class="col-md">
                <button type="button" class="btn btn-outline-warning w-100">
                  3 Months
                </button>
              </div>
              <div class="col-md">
                <button type="button" class="btn btn-outline-warning w-100">
                  1 Year
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h3>{coin.name}</h3>
        <h3>Rank:{coin.coingecko_rank}</h3>
        <h3>Current Price:₹ {coin.market_data?.current_price.inr}</h3>
      </div> */}
    </>
  );
};
export default SingleMovie;
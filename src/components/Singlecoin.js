import React, { useState, useEffect } from "react";
// import Navbar from './Navbar';
import Chart from "./Chart";
import { UserData } from "./Data";

import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { Button } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
// import axios from "axios";

// import { API_URL } from '../Context';
const Singlecoin = () => {
  const [coin, setCoin] = useState("bitcoin");
  const [historicData, setHistoricData] = useState([
    [1675641600000, 134352.273087095],
    [1675728000000, 133827.49294787165],
    [1675814400000, 138412.93656381514],
    [1675900800000, 136505.01198021945],
    [1675987200000, 127625.75859897256],
    [1676073600000, 125023.89922264035],
    [1676160000000, 127195.62488689607],
    [1676246400000, 125033.73811169305],
    [1676332800000, 124468.64110036433],
    [1676419200000, 129020.510044233],
    [1676505600000, 138579.58698237265],
    [1676592000000, 136115.57311943374],
    [1676678400000, 140544.33948512326],
    [1676764800000, 140164.51926574917],
    [1676851200000, 139077.40563661134],
    [1676937600000, 140592.74776100033],
    [1677024000000, 137266.83540950494],
    [1677110400000, 136113.1520981817],
    [1677196800000, 136472.80814883325],
    [1677283200000, 133365.65109094052],
    [1677369600000, 132190.50176400796],
    [1677456000000, 136057.70764232468],
    [1677542400000, 135051.67489932216],
    [1677628800000, 132765.2931358308],
    [1677715200000, 137141.01381740184],
    [1677801600000, 135693.34620295005],
    [1677888000000, 128342.53035261676],
    [1677974400000, 128166.08892520636],
    [1678060800000, 127735.46771305068],
    [1678147200000, 128294.9070753717],
    [1678233600000, 128349.73392479988],
    [1678320000000, 125837.23042437827],
    [1678406400000, 118120.74709733229],
    [1678492800000, 117253.68593668086],
    [1678579200000, 120850.19912899558],
    [1678665600000, 130208.69280715798],
    [1678752000000, 138373.96676625288],
    [1678838400000, 140605.02116980508],
    [1678924800000, 137148.85414508672],
    [1679011200000, 138789.23843328457],
    [1679097600000, 148006.0771484009],
    [1679184000000, 146035.36120719567],
    [1679270400000, 148677.01280325887],
    [1679356800000, 143967.62852575892],
    [1679443200000, 149762.68863234215],
    [1679529600000, 144225.65707342423],
    [1679616000000, 150131.0723126719],
    [1679702400000, 144208.46313231156],
    [1679788800000, 144435.997460662],
    [1679875200000, 146305.60116163615],
    [1679890747000, 145644.49633225528],
  ]);

  const [days, setDays] = useState(100);
  const [style1, setStyle1] = useState("btn btn-outline-warning w-100");
  const [style30, setStyle30] = useState("btn btn-outline-warning w-100");
  const [style90, setStyle90] = useState("btn btn-outline-warning w-100");
  const [style365, setStyle365] = useState("btn btn-outline-warning w-100");

  const [userData, setUserData] = useState({
    labels: historicData.map((coin) => {
      let date = new Date(coin[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      // console.log(date.toLocaleDateString());
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        data: historicData.map((coin) => coin[1]),
        label: `Price ( Past 50 Days ) in INR`,
        borderColor: "gold",
        // fill: {
        //   target: "origin",
        //   above: "#f8f9fa", // Area will be red above the origin
        //   below: "rgb(0, 0, 255)", // And blue below the origin
        // },
      },
    ],
  });

  const { user, setAlert, watchlist } = useGlobalContext();
  const { id } = useParams();
  const inWatchlist = watchlist.includes(coin?.id);

  // let  coin_price=numberWithCommas(coin?.market_data?.current_price?.inr?.toFixed(2));

  const getCoin = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCoin(data);
      console.log(data, coin);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setHistoricData(data.prices);
      setUserData({
        labels: data.prices.map((coin) => {
          let date = new Date(coin[0]);
          let time =
            date.getHours() > 12
              ? `${date.getHours() - 12}:${date.getMinutes()} PM`
              : `${date.getHours()}:${date.getMinutes()} AM`;
          // console.log(date.toLocaleDateString());
          return days === 1 ? time : date.toLocaleDateString();
        }),
        datasets: [
          {
            data: data.prices.map((coin) => coin[1]),
            fill: true,
            // backgroundColor: "rgb(225, 225, 225,0.2)",
            pointRadius: 1,
            label: `Price ( Past ${days} Days ) in INR`,
            borderColor: "gold",
          },
        ],
      });
      console.log(data.prices, historicData);
    } catch (error) {
      console.log(error);
    }
  };

  // https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=5&interval=daily
  useEffect(() => {
    getCoin(`https://api.coingecko.com/api/v3/coins/${id}`);
    getData(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=100&interval=daily`
    );
  }, [id]);

  useEffect(() => {
    console.log("refresh");
    if (days == 1) {
      getData(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=time`
      );
    } else {
      getData(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`
      );
    }
  }, [days]);

  // useEffect(() => {
  //   getData(
  //     `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`
  //   );
  // }, [days]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=100&interval=daily`
  //     )
  //     .then((response) => {
  //       setHistoricData(response.data.prices);
  //       console.log(response.data.prices, historicData);
  //     });
  // }, []);

  const addToWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Added to the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };
  const removeFromWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Removed from the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  return (
    <>
      <div class="container-fluid mt-5 ">
        <div class="row mt-4 text-white">
          <div class="col-md-4 first-div text-center coin-detail">
            <img src={coin?.image?.large} alt="" />
            <br />
            <br />
            <h1 style={{ fontSize: 60, fontWeight: "bolder" }}>{coin?.name}</h1>
            <p>{coin?.description?.en.split(". ")[0]}.</p>
            <span style={{ display: "flex" }}>
              <h3 style={{ fontSize: 30, fontWeight: "bolder" }}>Rank:</h3>
              &nbsp; &nbsp;
              <h3 style={{ fontSize: 30, fontWeight: "lighter" }}>
                {coin?.coingecko_rank}
              </h3>
            </span>
            <br />
            <span style={{ display: "flex" }}>
              <h3
                style={{
                  fontSize: 30,
                  fontWeight: "bolder",
                  textAlign: "left",
                }}
              >
                Current Price:
              </h3>
              &nbsp; &nbsp;
              <h3 style={{ fontSize: 30, fontWeight: "lighter" }}>
                ₹{coin?.market_data?.current_price?.inr.toLocaleString()}
              </h3>
            </span>

            <br />
            <span style={{ display: "flex" }}>
              <h3 style={{ fontSize: 30, fontWeight: "bolder" }}>
                Market Cap:
              </h3>
              &nbsp; &nbsp;
              <h3 style={{ fontSize: 30, fontWeight: "lighter" }}>
                ₹
                {coin?.market_data?.market_cap?.inr
                  .toLocaleString()
                  .toString()
                  .slice(0, 10)}
                M
              </h3>
            </span>
            {user && (
              <Button
                variant="contained"
                style={{
                  height: "8%",
                  width: "100%",
                  backgroundColor: inWatchlist ? "#ff0000" : "#EEBC1D",
                  marginTop: 20,
                }}
                onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
              >
                {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
              </Button>
            )}
          </div>
          <div class="col-md-8 second-div">
            <div class="row mt-4  justify-content-between">
              <div class="my-5" style={{ width: 900 }}>
                <Chart chartData={userData} />
              </div>
              <div class="col-md">
                <button
                  type="button mr-2"
                  class={style1}
                  onClick={() => {
                    setDays(1);
                    setStyle1(
                      "btn btn-outline-warning w-100 bg-warning text-white"
                    );
                    setStyle30("btn btn-outline-warning w-100");
                    setStyle90("btn btn-outline-warning w-100");
                    setStyle365("btn btn-outline-warning w-100");
                  }}
                >
                  24 Hours
                </button>
              </div>
              <div class="col-md">
                <button
                  type="button mr-2"
                  class={style30}
                  onClick={() => {
                    setDays(30);
                    setStyle30(
                      "btn btn-outline-warning w-100 bg-warning text-white"
                    );
                    setStyle1("btn btn-outline-warning w-100");
                    setStyle90("btn btn-outline-warning w-100");
                    setStyle365("btn btn-outline-warning w-100");
                  }}
                >
                  30 Days
                </button>
              </div>
              <div class="col-md">
                <button
                  type="button"
                  class={style90}
                  onClick={() => {
                    setDays(90);
                    setStyle90(
                      "btn btn-outline-warning w-100 bg-warning text-white"
                    );
                    setStyle1("btn btn-outline-warning w-100");
                    setStyle30("btn btn-outline-warning w-100");
                    setStyle365("btn btn-outline-warning w-100");
                  }}
                >
                  3 Months
                </button>
              </div>
              <div class="col-md">
                <button
                  type="button"
                  class={style365}
                  onClick={() => {
                    setDays(365);
                    setStyle365(
                      "btn btn-outline-warning w-100 bg-warning text-white"
                    );
                    setStyle1("btn btn-outline-warning w-100");
                    setStyle30("btn btn-outline-warning w-100");
                    setStyle90("btn btn-outline-warning w-100");
                  }}
                >
                  1 Year
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Singlecoin;
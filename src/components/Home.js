import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { useState } from "react";
import Carousel from "./Carousel";
import Particles from "./Particles";
import { confirmPasswordReset } from "firebase/auth";

const Home = () => {
  const { coins, query } = useGlobalContext();
  const [coins2, setCoins2] = useState(coins);
  const [query2, setQuery2] = useState("");

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = coins2.filter((coin) => {
        return coin.id.toLowerCase().includes(keyword.toLowerCase());
      });
      setCoins2(results);
    } else {
      setCoins2(coins);
    }
    setQuery2(keyword);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // console.log(coins);
  // console.log("hello");
  return (
    <div className="continer-fluid text-secondary">
      <div className="row ">
        <div className="head col-md-12 col-12 justify-content-center align-items-center text-center">
          <h1 className="text-white mt-5">
            Welcome to the crypto analyzer app
          </h1>
          <div className="carousel-container">
            <Carousel />
          </div>
          <Particles />
        </div>
        <div className="col-md-12 col-12">
          <div className="row mt-4">
            <h1 class="center text-center ">LIST OF CRYPTO COINS</h1>
            <div className="col-md-12 bg-dark text-secondary">
              <article class="row  episode">
                <div class="episode__number col-md-3 col-12">
                  <div className="row">
                    <div className="col-md-8 col-12">
                      <br />
                      <button class="btn bg-transparent">
                        <h4 className="text-uppercase text-secondary">NAME</h4>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-9 col-12">
                  <div className="row mt-4">
                    <div class="col-md-4 col-12">
                      <button class="btn bg-transparent">
                        <h4 className="text-uppercase text-secondary">PRICE</h4>
                      </button>
                    </div>
                    <div class="col-md-4 col-12">
                      <button class="btn bg-transparent">
                        <h4 className="text-uppercase text-secondary">
                          CHANGE PERCENTAGE
                        </h4>
                      </button>
                    </div>
                    <div class="col-md-4 col-12">
                      <button class="btn bg-transparent">
                        <h4 className="text-uppercase text-secondary">
                          MARKET CAP
                        </h4>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {coins.map((curCoins) => {
              if (query !== "") {
                if (curCoins.id.toLowerCase().includes(query.toLowerCase())) {
                  return (
                    <NavLink
                      to={`coin/${curCoins.id}`}
                      key={curCoins.id}
                      className="hell"
                    >
                      <div className="col-md-12">
                        <article class="row episode__content episode">
                          <div class="episode__number  col-md-3 col-12">
                            <div className="row">
                              <div className="col-md-4 col-6">
                                <img
                                  className="coinImagee p-3"
                                  src={curCoins.image}
                                ></img>
                              </div>
                              <div className="col-md-8 col-6 text-left mt-3">
                                <h5 className="font m-0 text-uppercase">
                                  {curCoins.symbol}
                                </h5>
                                <break />
                                <p>{curCoins.name}</p>
                              </div>
                            </div>
                          </div>

                          <div class=" col-md-9 col-12">
                            <div className="row mt-4">
                              <div class="col-md-4 col-12">
                                <h4>
                                  ₹{" "}
                                  {numberWithCommas(
                                    curCoins.current_price.toFixed(2)
                                  )}
                                </h4>
                              </div>
                              <div class="col-md-4 col-12">
                                <h4>
                                  {curCoins.price_change_percentage_24h.toFixed(
                                    2
                                  )}
                                  %
                                </h4>
                              </div>
                              <div class="col-md-4 col-12">
                                <h4>
                                  ₹
                                  {numberWithCommas(
                                    curCoins.market_cap.toString().slice(0, -6)
                                  )}
                                  M
                                </h4>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </NavLink>
                  );
                }
              } else {
                return (
                  <NavLink
                    to={`coin/${curCoins.id}`}
                    key={curCoins.id}
                    className="hell"
                  >
                    <div className="col-md-12">
                      <article class="row episode__content episode">
                        <div class="episode__number  col-md-3 col-12">
                          <div className="row">
                            <div className="col-md-4 col-6">
                              <img
                                className="coinImagee p-3"
                                src={curCoins.image}
                              ></img>
                            </div>
                            <div className="col-md-8 col-6 text-left mt-3">
                              <h5 className="font m-0 text-uppercase">
                                {curCoins.symbol}
                              </h5>
                              <break />
                              <p>{curCoins.name}</p>
                            </div>
                          </div>
                        </div>

                        <div class=" col-md-9 col-12">
                          <div className="row mt-4">
                            <div class="col-md-4 col-12">
                              <h4>
                                ₹{" "}
                                {numberWithCommas(
                                  curCoins.current_price.toFixed(2)
                                )}
                              </h4>
                            </div>
                            <div class="col-md-4 col-12">
                              <h4>
                                {curCoins.price_change_percentage_24h.toFixed(
                                  2
                                )}
                                %
                              </h4>
                            </div>
                            <div class="col-md-4 col-12">
                              <h4>
                                ₹{" "}
                                {numberWithCommas(
                                  curCoins.market_cap.toString().slice(0, -6)
                                )}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </NavLink>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
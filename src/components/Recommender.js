import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Predictor = () => {
  const { coins, query } = useGlobalContext();
  const [coins2, setCoins2] = useState([]);
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function compare(a, b) {
    if (a.current_price > b.current_price) {
      return 1;
    }
    if (a.current_price < b.current_price) {
      return -1;
    }
    return 0;
  }

  function calculate() {
    if (fromValue < toValue) {
      const results = coins.filter((coin) => {
        // return coin.current_price >= fromValue && coin.current_price <= fromValue;
        return coin.current_price >= fromValue && coin.current_price <= toValue;
      });
      results.sort(compare);
      setCoins2(results);
    }
  }

  return (
    <div>
      <h1>
        <span className="border-bottom border-warning border-4 rounded-1">
          Recommender
        </span>
      </h1>

      <div className="">
        <div className="text-center m-5">
          <h2>Enter the amount you want to invest</h2>
        </div>
        <div className="d-flex gap-2">
          <h2>From: </h2> &nbsp;
          <input
            type="number"
            className="form-control rounded  bg-dark text-white w-50"
            placeholder="21,000"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setFromValue(e.target.value)}
          />
          &nbsp;
          <h2>To: </h2> &nbsp;
          <input
            type="number"
            className="form-control rounded  bg-dark text-white w-50"
            placeholder="5,000,000"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setToValue(e.target.value)}
          />
          <button className="btn btn-warning" onClick={calculate}>
            Submit
          </button>
        </div>
        <div>
          {coins2.length > 0 && (
            <div className="col-md-12 col-12">
              <div className="row mt-4">
                <h1 class="center text-center ">LIST OF CRYPTO COINS</h1>
                <h5 className="text-secondary">
                  Assets Found: {coins2.length}
                </h5>
                <div className="col-md-12 bg-dark text-secondary">
                  <article class="row  episode">
                    <div class="episode__number col-md-3 col-12">
                      <div className="row">
                        <div className="col-md-8 col-12">
                          <br />
                          <h5 className="text-uppercase">NAME</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-9 col-12">
                      <div className="row mt-4">
                        <div class="col-md-4 col-12">
                          <h4>PRICE</h4>
                        </div>
                        <div class="col-md-4 col-12">
                          <h4>CHANGE PERCENTAGE</h4>
                        </div>
                        <div class="col-md-4 col-12">
                          <h4>MARKET CAP</h4>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                {coins2.map((curCoins) => {
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
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predictor;
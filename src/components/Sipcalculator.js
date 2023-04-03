import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Sipcalculator = () => {
  const { coins, query } = useGlobalContext();
  const [coins2, setCoins2] = useState([]);
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [total, setTotal] = useState(0);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [data, setData] = useState({
    labels: ["Invested amount", "Est. Returns"],
    datasets: [
      {
        label: "Value",
        data: [0, 0],
        backgroundColor: ["#3B71CA", "rgb(60, 179, 113)"],
        borderColor: ["#c5f6fa", "#96f2d7"],
        borderWidth: 3,
      },
    ],
  });

  function calculate() {
    if (amount !== 0 && interest !== 0 && years !== 0) {
      const rate = interest / (100 * 12);
      var value =
        amount * ((Math.pow(1 + rate, years * 12) - 1) / 0.01) * (1 + rate);
      setTotal(Math.trunc(value));
      value -= amount * 12 * years;

      //   P × ({[1 + i]n – 1} / i) × (1 + i)
      setData({
        labels: ["Invested amount", "Est. Returns"],
        datasets: [
          {
            label: "Value",
            data: [amount * 12 * years, value],
            backgroundColor: ["#3B71CA", "rgb(60, 179, 113)"],
            borderColor: ["#c5f6fa", "#96f2d7"],
            borderWidth: 3,
          },
        ],
      });
    }
  }

  return (
    <div>
      <h1>
        <span className="border-bottom border-warning border-4 rounded-1">
          SIP Calculator
        </span>
      </h1>

      <div className="border border-secondary rounded p-5 m-4">
        <div className="text-center m-5">
          <h2>SIP Calculator</h2>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-8">
              <div class="row">
                <div class="col-3">
                  <h4>Monthly investment</h4> &nbsp;
                </div>
                <div class="col-3">
                  <input
                    type="number"
                    className="form-control rounded  bg-dark text-white w-60"
                    placeholder="21,000"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <h4>Expected return (p.a)</h4> &nbsp;
                </div>
                <div class="col-3">
                  <input
                    type="number"
                    className="form-control rounded  bg-dark text-white w-60"
                    placeholder="12"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setInterest(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <h4>Time period</h4> &nbsp;
                </div>
                <div class="col-3">
                  <input
                    type="number"
                    className="form-control rounded  bg-dark text-white w-60"
                    placeholder="1Yr"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <button className="btn btn-primary m-5" onClick={calculate}>
                    Submit
                  </button>
                </div>
              </div>
              {total !== 0 && (
                <div class="row">
                  <div class="col-3">
                    <h2 className="fw-bold">Total value</h2> &nbsp;
                  </div>
                  <div class="col-3">
                    <h2 className="text-warning fw-bold">
                      {" "}
                      ₹ {numberWithCommas(total)}
                    </h2>
                  </div>
                </div>
              )}
            </div>
            <div class="col-4">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sipcalculator;
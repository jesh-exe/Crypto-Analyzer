import React from "react";
import "../App.css";
import { useGlobalContext } from "../Context";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  200: { items: 1 },
  400: { items: 2 },
  600: { items: 3 },
  800: { items: 4 },
};

var items;

const Carousel = () => {
  const { coins } = useGlobalContext();
  // const [coins2, setCoins2] = useState([]);
  function compare(a, b) {
    if (a.price_change_percentage_24h < b.price_change_percentage_24h) {
      return 1;
    }
    if (a.price_change_percentage_24h > b.price_change_percentage_24h) {
      return -1;
    }
    return 0;
  }

  function check(num) {
    var str = " fw-bold text-success ";
    if (num < 0) {
      str = " fw-bold text-danger ";
    }

    return str;
  }
  const coins2 = [...coins];
  // setCoins2(coins);

  coins2.sort(compare);

  items = [
    <NavLink to={`coin/${coins2[0]?.id}`} key={coins2[0]?.id} className="hell">
      <div>
        <img
          alt="none found :)"
          className="carousel-img"
          src={coins2[0]?.image}
          onDragStart={handleDragStart}
          role="presentation"
        />
        <br />
        <br />
        <p>
          {coins2[0]?.name} &nbsp;
          <span className="fw-bold text-success">
            {coins2[0]?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
      </div>
    </NavLink>,

    <NavLink to={`coin/${coins2[1]?.id}`} key={coins2[1]?.id} className="hell">
      <div>
        <img
          alt="none found :)"
          className="carousel-img"
          src={coins2[1]?.image}
          onDragStart={handleDragStart}
          role="presentation"
        />
        <br />
        <br />
        <p>
          {coins2[1]?.name} &nbsp;
          <span className="fw-bold text-success">
            {coins2[1]?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
      </div>
    </NavLink>,
    <NavLink to={`coin/${coins2[2]?.id}`} key={coins2[2]?.id} className="hell">
      <div>
        <img
          alt="none found :)"
          className="carousel-img"
          src={coins2[2]?.image}
          onDragStart={handleDragStart}
          role="presentation"
        />
        <br />
        <br />
        <p>
          {coins2[2]?.name} &nbsp;
          <span className="fw-bold text-success">
            {coins2[2]?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
      </div>
    </NavLink>,
    <NavLink to={`coin/${coins2[3]?.id}`} key={coins2[3]?.id} className="hell">
      <div>
        <img
          alt="none found :)"
          className="carousel-img"
          src={coins2[3]?.image}
          onDragStart={handleDragStart}
          role="presentation"
        />
        <br />
        <br />
        <p>
          {coins2[3]?.name} &nbsp;
          <span className="fw-bold text-success">
            {coins2[3]?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
      </div>
    </NavLink>,
    <NavLink
      to={`coin/${coins2[96]?.id}`}
      key={coins2[96]?.id}
      className="hell"
    >
      <div>
        <img
          alt="none found :)"
          className="carousel-img"
          src={coins2[96]?.image}
          onDragStart={handleDragStart}
          role="presentation"
        />
        <br />
        <br />
        <p>
          {coins2[96]?.name} &nbsp;
          <span
            className={check(
              coins2[96]?.price_change_percentage_24h.toFixed(2)
            )}
          >
            {coins2[96]?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
      </div>
    </NavLink>,
    <NavLink
      to={`coin/${coins2[97]?.id}`}
      key={coins2[97]?.id}
      className="hell"
    >
      <div>
        <img
          alt="none found :)"
          className="carousel-img"
          src={coins2[97]?.image}
          onDragStart={handleDragStart}
          role="presentation"
        />
        <br />
        <br />
        <p>
          {coins2[97]?.name} &nbsp;
          <span
            className={check(
              coins2[97]?.price_change_percentage_24h.toFixed(2)
            )}
          >
            {coins2[97]?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
      </div>
    </NavLink>,
    <NavLink
      to={`coin/${coins2[98]?.id}`}
      key={coins2[98]?.id}
      className="hell"
    >
      <div>
        <img
          alt="none found :)"
          className="carousel-img"
          src={coins2[98]?.image}
          onDragStart={handleDragStart}
          role="presentation"
        />
        <br />
        <br />
        <p>
          {coins2[98]?.name} &nbsp;
          <span
            className={check(
              coins2[98]?.price_change_percentage_24h.toFixed(2)
            )}
          >
            {coins2[98]?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
      </div>
    </NavLink>,
    <NavLink
      to={`coin/${coins2[99]?.id}`}
      key={coins2[99]?.id}
      className="hell"
    >
      <div>
        <img
          alt="none found :)"
          className="carousel-img"
          src={coins2[99]?.image}
          onDragStart={handleDragStart}
          role="presentation"
        />
        <br />
        <br />
        <p>
          {coins2[99]?.name} &nbsp;
          <span
            className={check(coins[99]?.price_change_percentage_24h.toFixed(2))}
          >
            {coins2[99]?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
      </div>
    </NavLink>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlayInterval={1000}
      animationDuration={1500}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay="true"
      animationType="slide"
      autoPlayStrategy="none"
      infinite="true"
      disableButtonsControls="false"
      disableDotsControls="false"
    />
  );
};

export default Carousel;

{
  /* <p>
        {movie[0].name} &nbsp;
        {movie[0].price_change_percentage_24h}
      </p>
      <p>{movie[0].current_price}</p> */
}
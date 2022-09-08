import React from "react";
import "../App.css";
import { useGlobalContext } from "../Context";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
  items = [
    <div>
      <img
        alt="none found :)"
        className="carousel-img"
        src={coins[0]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {coins[0]?.name} &nbsp;
        {coins[0]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,

    <div>
      <img
        alt="none found :)"
        className="carousel-img"
        src={coins[1]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {coins[1]?.name} &nbsp;
        {coins[1]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        alt="none found :)"
        className="carousel-img"
        src={coins[2]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {coins[2]?.name} &nbsp;
        {coins[2]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        alt="none found :)"
        className="carousel-img"
        src={coins[3]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {coins[3]?.name} &nbsp;
        {coins[3]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        alt="none found :)"
        className="carousel-img"
        src={coins[4]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {coins[4]?.name} &nbsp;
        {coins[4]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        alt="none found :)"
        className="carousel-img"
        src={coins[5]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {coins[5]?.name} &nbsp;
        {coins[5]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        alt="none found :)"
        className="carousel-img"
        src={coins[6]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {coins[6]?.name} &nbsp;
        {coins[6]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        alt="none found :)"
        className="carousel-img"
        src={coins[7]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {coins[7]?.name} &nbsp;
        {coins[7]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
  ];
  console.log(coins);
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
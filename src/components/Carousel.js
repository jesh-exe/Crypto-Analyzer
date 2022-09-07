import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
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
  const { movie, page, setPage } = useGlobalContext();
  items = [
    <div>
      <img
        className="carousel-img"
        src={movie[0]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {movie[0]?.name} &nbsp;
        {movie[0]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,

    <div>
      <img
        className="carousel-img"
        src={movie[1]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {movie[1]?.name} &nbsp;
        {movie[1]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        className="carousel-img"
        src={movie[2]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {movie[2]?.name} &nbsp;
        {movie[2]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        className="carousel-img"
        src={movie[3]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {movie[3]?.name} &nbsp;
        {movie[3]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        className="carousel-img"
        src={movie[4]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {movie[4]?.name} &nbsp;
        {movie[4]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        className="carousel-img"
        src={movie[5]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {movie[5]?.name} &nbsp;
        {movie[5]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        className="carousel-img"
        src={movie[6]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {movie[6]?.name} &nbsp;
        {movie[6]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
    <div>
      <img
        className="carousel-img"
        src={movie[7]?.image}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <br />
      <br />
      <p>
        {movie[7]?.name} &nbsp;
        {movie[7]?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>,
  ];
  console.log(movie);
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
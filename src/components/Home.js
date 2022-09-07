import React, { useState } from 'react'
import '../App.css';
// import AliceCarousel from "react-alice-carousel";
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from "../Context";
import Carousel from './Carousel';
const Home = () => {
    const { movie, page, setPage } = useGlobalContext();
    const { query, setQuery } = useGlobalContext();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


    console.log(movie);
    console.log("hello");
    return (
        <div className='continer-fluid text-secondary'>
            <div className='row '>
                <div className='head col-md-12 col-12 justify-content-center align-items-center text-center'>
                    <h1 className='text-white mt-5'>Welcome to the crypto analyzer app</h1>
                    <div className="carousel-container">
                        <Carousel />
                    </div>
                </div>
                <div className='col-md-12 col-12'>
                    <div className='row mt-4'>
                        <h1 class="center text-center ">LIST OF CRYPTO COINS</h1>
                        <div className='col-md-12 bg-dark text-secondary'>
                            <article class="row  episode">
                                <div class="episode__number col-md-3 col-12">
                                    <div className='row'>
                                        <div className='col-md-8 col-12'>
                                            <br/>
                                            <h5 className='text-uppercase'>NAME</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-9 col-12">
                                    <div className='row mt-4'>

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
                        {movie.map((curMovie) => {
                            if (query != "") {
                                if (curMovie.id === query) {

                                    return <NavLink to={`coin/${curMovie.id}`} key={curMovie.id} className="hell">

                                        <div className='col-md-12'>

                                            <article class="row episode__content episode">
                                                <div class="episode__number  col-md-3 col-12">
                                                    <div className='row'>
                                                        <div className='col-md-4 col-6'>
                                                            <img className='coinImagee p-3' src={curMovie.image}></img>
                                                        </div>
                                                        <div className='col-md-8 col-6 text-left mt-3'>
                                                            <h5 className='font m-0 text-uppercase'>{curMovie.symbol}</h5>
                                                            <break />
                                                            <p>{curMovie.name}</p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class=" col-md-9 col-12">
                                                    <div className='row mt-4'>

                                                        <div class="col-md-4 col-12">
                                                            <h4>₹ {numberWithCommas(curMovie.current_price.toFixed(2))}</h4>
                                                        </div>
                                                        <div class="col-md-4 col-12">
                                                            <h4>{curMovie.price_change_percentage_24h.toFixed(2)}%</h4>

                                                        </div>
                                                        <div class="col-md-4 col-12">
                                                            <h4>₹{numberWithCommas(curMovie.market_cap.toString().slice(0, -6))}</h4>

                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                    </NavLink>
                                }
                            }
                            else {
                                return <NavLink to={`coin/${curMovie.id}`} key={curMovie.id} className="hell">

                                    <div className='col-md-12'>

                                        <article class="row episode__content episode">
                                            <div class="episode__number  col-md-3 col-12">
                                                <div className='row'>
                                                    <div className='col-md-4 col-6'>
                                                        <img className='coinImagee p-3' src={curMovie.image}></img>
                                                    </div>
                                                    <div className='col-md-8 col-6 text-left mt-3'>
                                                        <h5 className='font m-0 text-uppercase'>{curMovie.symbol}</h5>
                                                        <break />
                                                        <p>{curMovie.name}</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class=" col-md-9 col-12">
                                                <div className='row mt-4'>

                                                       <div class="col-md-4 col-12">
                                                        <h4>₹ {numberWithCommas(curMovie.current_price.toFixed(2))}
                                                        </h4>
                                                        </div>
                                                        <div class="col-md-4 col-12">
                                                            <h4>{curMovie.price_change_percentage_24h.toFixed(2)}%</h4>

                                                        </div>
                                                        <div class="col-md-4 col-12">
                                                            <h4>₹  {numberWithCommas(
                                                                curMovie.market_cap.toString().slice(0, -6))}
                                                            </h4>

                                                        </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                </NavLink>

                            }
                        })}
                        <nav aria-label="Page navigation example my-auto bg-dark text-white">
                            <ul class="pagination my-3 bg-transparent justify-content-center align-items-center text-white w-100">
                                <li class="page-item"><a class="page-link bg-transparent text-white" href="#" onClick={e => { setPage(page - 1) }}>← Previous</a></li>
                                <li class="page-item"><a class="page-link bg-transparent text-white" href="#" onClick={e => { setPage(page + 1) }}>Next →</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
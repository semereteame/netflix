import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requst";
import "./Banner.css";
const Banner = () => {
  const [movie, setMoive] = useState([]);
 

  const fetch = async () => {
    let resp = await axios.get(request.fetchNetflixOriginals);
    setMoive(
      resp.data.results[
        Math.floor(Math.random() * (resp.data.results.length - 1))
      ]
    );
  };
  useEffect(() => {
    
    fetch();
   
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
    data-test ="bannerHeader"
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents" data-test="banner-content">
        <h1 className="banner__title" data-test='title'>
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>

          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__fade" />
    </header>
  );
};

export default Banner;

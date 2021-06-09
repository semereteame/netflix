import React, { useState, useEffect  } from "react";
import axios from "../axios";
import PropType from "prop-types";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseURL = "https://image.tmdb.org/t/p/original/";



const Row = ({ title, fetchUrl, isLargeRow}) => {
  

  const [movies, Setmoives] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
   const fetchData = async () => {
    let response = await axios.get(fetchUrl);
     Setmoives(response.data.results);
   };
  useEffect(() => {
     //getMoviesAsync(fetchUrl)
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const clickHandler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="row" data-test="container">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => {
          console.log(movie)
          return (
            <img
              data-test="largeimage"
              onClick={() => clickHandler(movie)}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

Row.propTypes = {
  title: PropType.string,
  isLargeRow: PropType.bool,
  fetchUrl: PropType.string,
};



export default Row

import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchurl, isLarge }) => {
  const [movie, setmovie] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "http://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        // console.log(fetchurl);
        const movieRequest = await axios.get(fetchurl);
        setmovie(movieRequest.data.results);
        // console.log(movieRequest);
      } catch (error) {
        console.log("I got Error to fetch the data from the diven address!");
      }
    })();
  }, [fetchurl]);
  const handlingClick = (singleMovie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        singleMovie?.name || singleMovie?.title || singleMovie?.original_title
      ).then((url) => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams);
        console.log(urlParams.get("v"));
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };

  const opts = {
    height: "390px",
    width: "640px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="outer_container">
        <h1 className="poster_title">{title}</h1>
        <div className="row_posters">
          {movie?.map((singleMovie, index) => {
            return (
              <img
                key={index}
                onClick={() => handlingClick(singleMovie)}
                src={`${base_url}${
                  isLarge ? singleMovie.poster_path : singleMovie.backdrop_path
                } `}
                alt={singleMovie.name}
                className={`row_poster ${isLarge && "row_largePoster"}`}
              />
            );
          })}
        </div>
        <div
          style={{ padding: "40px", justifyContent: "center", display: "flex" }}
        >
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
};

export default Row;

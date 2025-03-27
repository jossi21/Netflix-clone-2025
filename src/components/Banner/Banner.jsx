import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";

const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request);
        const extractedData = request.data.results;
        setmovie(
          extractedData[Math.floor(Math.random() * extractedData.length)]
        );
      } catch (error) {
        console.log("I got the problem to fetch the data", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('http://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.original_name ?? movie?.name}
          </h1>
          <h3 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h3>
          <div className="banner_buttons">
            <button className="play_button">Play</button>
            <button className="myList_button">My List</button>
          </div>
        </div>
        <div className="banner_fadeBottom" />
      </div>
    </>
  );
};

export default Banner;

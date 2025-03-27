import React, { useEffect, useState } from "react";
import "./orginalNetfliex.css";
import axios from "../../../../utils/axios";
import requests from "../../../../utils/requests";

const OriginalNetfliex = ({ title, fetchurl }) => {
  const [original, setOriginal] = useState([]);

  const base_URL = "http://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchurl);
        const originalRequest = await axios.get(requests.fetchNetflixOriginals);
        // console.log(originalRequest);
        setOriginal(originalRequest.data.results);
        console.log(originalRequest);
      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, []);

  return (
    <>
      <div className="original_container">
        <h1 className="poster_title">{title}</h1>
        <div className="original_poster">
          {original?.map((singleMovie, index) => {
            return (
              <img
                key={index}
                src={`${base_URL}${singleMovie.poster_path}`}
                alt={singleMovie.name}
              />
            );
          })}
        </div>
        ;
      </div>
    </>
  );
};

export default OriginalNetfliex;
